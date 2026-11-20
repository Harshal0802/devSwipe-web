import React from "react";

const UserCard = ({ user }) => {
  console.log(user);
  const { firstName, lastName, photoUrl, gender, age, skills, about } = user;
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          {photoUrl ? <img src={photoUrl} alt={`${firstName} ${lastName}`} /> : null}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{gender && age && gender + ", " + age}</p>
          <p>{about}</p>
          <p>{skills && skills.join(", ")}</p>
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
