import React, { useEffect, useState } from "react";
import userStyles from "../css/Usercard.module.css";
import { Link } from "react-router-dom";
import { getUser } from "../http/fetching";

const UserCard = ({ title }) => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    getUser(title).then((res) => {
      setCurrentUser(res);
    });
  }, []);

  return (
    <div className={userStyles.container}>
      <img src={currentUser.avatar_url} alt={title} />
      <h2>Name: {currentUser.login}</h2>
      <h2>Repositories: {currentUser.public_repos}</h2>
      <h2>Followers: {currentUser.followers}</h2>
      <h2>Following: {currentUser.following}</h2>
      <Link className={userStyles.link} to={`/user/${title}`}>
        Read More
      </Link>
    </div>
  );
};

export default UserCard;
