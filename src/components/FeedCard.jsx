import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const Card = ({ user }) => {
  const { _id, photoUrl, firstName, about, age, gender, lastName } = user;

  const dispatch = useDispatch();

  const reviewFeedConnections = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true },

      );
      console.log(res)
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.log(err);
    }
  };
  

  

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>
          {age}, {gender}
        </p>
        <p>{about}</p>
        <div className="card-actions justify-center">
          <button
            className="btn btn-secondary "
            onClick={() => reviewFeedConnections("interested", _id)}
          >
            Interest
          </button>
          <button
            className="btn btn-primary "
            onClick={() => reviewFeedConnections("ignored", _id)}
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
