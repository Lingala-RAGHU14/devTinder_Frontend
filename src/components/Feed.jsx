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

  return (
    feed && (
      <div className="flex justify-center my-5">
        <Card user={feed?.message[3]} />
        {/* console.log(user) */}
      </div>
    )
  );
};

export default Feed;
