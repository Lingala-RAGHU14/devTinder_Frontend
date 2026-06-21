import axios from "axios";
import {BASE_URL} from "../utils/constants"
import {useEffect,useState} from "react"
import {useDispatch,useSelector} from "react-redux";
import { addRequests } from "../utils/requestSlice";

const Requests = () => {
    const [loading, setLoading] = useState(true)
    const requests = useSelector((store)=>store.requests)
    console.log("requests", requests)
    const dispatch = useDispatch()
    const fetchRequest = async () => {
       try{ 
        const res = await axios.get(BASE_URL + "/user/request/received", { withCredentials:true })
        dispatch(addRequests(res?.data?.data))
    } catch (err) {
        console.error(err)
    } finally {
        setLoading(false)
    }}
    useEffect(()=> {
        fetchRequest()
    },[])
    if (loading) return <h1>Loading requests...</h1>
    if (!Array.isArray(requests) || requests.length === 0) return <h1>No Requests Found</h1>
    return (
        <div>
            <h1 className= "flex justify-center  text-3xl my-5" >Requests</h1>
            {requests.map((request)=> {
                const fromUser = request.fromUserId ?? request
                const {_id,firstName,lastName,age,about,gender,photoUrl} = fromUser

            return (
            <div key = {_id} className="flex justify-center mx-5  ">
                <div className = "flex bg-base-200 w-auto  p-4 my-4  items-center rounded-sm "> 
                    <img alt="photo" className="w-25 h-28 mx-5 my-5 rounded-full" src={photoUrl} />
                     <div className = "flex-row m-5" >
                        <h1>{firstName + " " + lastName  }</h1>
                    
                    {age && gender&& <p>{age + ", " +gender}</p>} 
                    <p className = "text-2sm">{about}</p>
                    </div>
                    <div className="">
                    <button className="btn btn-primary m-5 text-xl">accept</button>
                    <button className="btn btn-secondary text-xl">reject</button>
                    </div>
                    </div> 
                </div>
)})}
        </div>
        
    )

}

export default Requests;