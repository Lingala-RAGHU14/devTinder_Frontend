import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const addUser = (user) => ({
  type: "user/addUser",
  payload: user,
});

const Login = () => {
  const [email, setEmailid] = useState("sanju@gmail.com");
  const [password, setPassword] = useState("Sanju@2003");
  const [error, setError] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );
      console.log(res.data);

      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
        setError(err?.response?.data) || "something went wrong"
      console.error(err.message);
    }
  };
  return (
    <div className="flex justify-center my-5">
      <div className="card bg-base-300 w-96 shadow-sm ">
        <div className="card-body">
          <h2 className="card-title flex justify-center text-2xl">Login</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Email Id:</legend>
            <input
              type="text"
              onChange={(e) => setEmailid(e.target.value)}
              value={email}
              className="input"
              placeholder="Type here"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Password:</legend>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Type here"
            />
          </fieldset>
          <p className="text-red-500">{error}</p>
          <div className="card-actions flex justify-center">
            <button className="btn btn-primary text-xl" onClick={handlelogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
