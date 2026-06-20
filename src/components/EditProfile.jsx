import { useState } from "react";
import FeedCard from "./FeedCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false)
  const dispatch = useDispatch();

  const saveProfile = async () => {
    setError("")
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age: Number(age), gender, photoUrl, about },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err?.response?.data || err?.message || "Unable to save profile");
    }
  };

  return (
    <div className="flex my-10 justify-center">
      <div className="flex justify-center mx-10">
        <div className="card bg-base-300 w-96 shadow-sm ">
          <div className="card-body">
            <h2 className="card-title flex justify-center text-2xl">
              Edit Profile
            </h2>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm">FirstName:</legend>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="input"
                placeholder="Type here"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm">LastName:</legend>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="input"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm">photoUrl:</legend>
              <input
                type="text"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="input"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm">age:</legend>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="input"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm">Gender:</legend>
              <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="input"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm">About:</legend>
              <input
                type="text"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="input"
                placeholder="Type here"
              />
            </fieldset>

            <div className="card-actions flex justify-center">
              <h1 className="text-red-500">{error}</h1>
              <button className="btn btn-primary text-xl" onClick={saveProfile}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <FeedCard user={{ firstName, lastName, age, gender, photoUrl, about }} />
       {showToast &&
       <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Profile Saved successfully.</span>
                </div>
                </div>}
    </div>
  );
};

export default EditProfile;
