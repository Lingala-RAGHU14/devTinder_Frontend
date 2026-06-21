import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addConnection } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connection);
  console.log(connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/userConnections", {
        withCredentials: true,
      });
      dispatch(addConnection(res?.data?.data));
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;
  if (connections.length === 0) return <h1>No Connection Found</h1>;
  return (
    <div>
      <h1 className="flex justify-center  text-3xl my-5">Connections</h1>
      {connections.map((connection) => {
        const { _id, firstName, lastName, age, about, gender, photoUrl } = connection;
        return (
          <div key={_id} className="flex justify-center mx-5">
            <div className="flex bg-base-300 w-1/2 my-4 items-center rounded-sm ">
              <img
                alt="photo"
                className="w-25 h-28 mx-5 my-5 rounded-full"
                src={photoUrl}
              />
              <div className="flex-row m-5">
                <h1>{firstName + " " + lastName}</h1>
                <p>{age + ", " + gender}</p>
                <p className="text-sm">{about}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Connections;
