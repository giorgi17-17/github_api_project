import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrgs, getRepos, getUser } from "../http/fetching";
import Header from "./Header";
import userStyles from "../css/User.module.css";

const User = () => {
  const { title } = useParams();
  const [user, setUser] = useState([]);
  const [orgs, setOrgs] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getUser(title).then((res) => {
      console.log(res);
      setUser(res);
    });

    getOrgs(title).then((res) => {
      console.log(res);
      setOrgs(res);
    });

    getRepos(title).then((res) => {
      console.log(res);
      setRepos(res);
    });
  }, []);

  return (
    <>
      <Header />
      <div className={userStyles.container}>
        <div className={userStyles.info}>
          <img src={user.avatar_url} alt={user.name} />
          <h1>Name: {user.name}</h1>
          <div className={userStyles.infoCont}>
            <ul>
              <li>{user.bio}</li>
              <li>Followers {user.followers}</li>
              <li>Following {user.following}</li>
            </ul>
            <div className={userStyles.orgsCont}>
              {orgs
                .map((res) => {
                  return (
                    <div className={userStyles.orgs} key={res.id}>
                      <img src={res.avatar_url} alt="sds" />
                      <a
                        target="_blank"
                        href={`https://github.com/${res.login}`}
                        rel="noreferrer"
                      >
                        Link
                      </a>
                    </div>
                  );
                })
                .slice(0, 4)}
            </div>
          </div>
          <div className={userStyles.oraganization}></div>
        </div>
        <div className={userStyles.repos}>
          {repos
            .map((rep) => {
              return (
                <div className={userStyles.repo} key={rep.id}>
                  <div className={userStyles.repoElements}>
                    <h1>Name: {rep.full_name}</h1>
                    <h1>Forks: {rep.forks}</h1>
                    <h1>Stars: {rep.stargazers_count}</h1>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href={`https://github.com/${rep.full_name}?tab=repositories`}
                      rel="noreferrer"
                    >
                      Check Repos
                    </a>
                  </div>
                </div>
              );
            })
            .slice(0, 10)}
        </div>
      </div>
    </>
  );
};

export default User;
