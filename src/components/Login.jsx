import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId: emailId,
          password: password,
        },
        {
          withCredentials: true,
        },
      );
      dispatch(addUser(res?.data?.data));
      navigate("/");
      console.log("res", res.data);
    } catch (err) {
      setError(err?.response?.data);
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <fieldset className="fieldset">
            <label className="label" htmlFor="Email Id">
              Email Id
            </label>
            <input
              type="text"
              id="emailId"
              className="input"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="Email Id"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label" htmlFor="Password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </fieldset>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
