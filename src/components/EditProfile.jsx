import React, { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [error, setError] = useState("");

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, about, gender, photoUrl },
        {
          withCredentials: true,
        },
      );
      dispatch(addUser(res?.data?.data));
    } catch (error) {
      setError(error?.response?.data);
    }
  };

  return (
    <div className="flex justify-center my-10 gap-10">
      <div className="flex justify-center">
        <div className="card card-border bg-base-300 w-90">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>

            <fieldset className="fieldset">
              <label className="label" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label" htmlFor="photoUrl">
                Profile photo
              </label>
              <input
                type="text"
                id="photoUrl"
                className="input"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label" htmlFor="age">
                Age
              </label>
              <input
                type="number"
                id="age"
                className="input"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label" htmlFor="gender">
                Gender
              </label>
              <input
                type="text"
                id="gender"
                className="input"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label" htmlFor="about">
                About
              </label>
              <input
                type="text"
                id="about"
                className="input"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </fieldset>

            <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={saveProfile}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, age, about, gender, photoUrl }} />
    </div>
  );
};

export default EditProfile;
