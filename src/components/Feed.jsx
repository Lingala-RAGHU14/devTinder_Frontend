import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/FeedCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
//   console.log(feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;

    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);
  if (!feed) return <h1 className="text-center mt-10">Loading...</h1>;

  const users = Array.isArray(feed?.message)
    ? feed.message
    : Array.isArray(feed)
    ? feed
    : [];

  if (users.length <= 0)
    return <h1 className="flex justify-center m-5">No New Users Found!!!</h1>;

  return (
    <div className="flex justify-center my-5">
      <Card user={users[0]} />
    </div>
  );
};

export default Feed;
