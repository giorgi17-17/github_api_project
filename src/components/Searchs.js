import axios from "axios";
import { useState } from "react";
import Header from "./Header";
import UserCard from "./UserCard";
import searchStyles from "../css/Search.module.css";

const Searchs = () => {
  const [search, setSearch] = useState("");
  const [searchUser, setSearchUser] = useState([]);
  const [waiting, setWaiting] = useState(false);
  function handleChange(e) {
    setSearch(e.target.value);
  }
  const USER_API = `https://api.github.com/users/${search}`;
  const handleClick = async () => {
    try {
      const result = await axios.get(`${USER_API}`);
      setSearchUser(result.data);
      setWaiting(true);
    } catch (error) {
      throw new Error("userrrrrr");
    }
    setSearch("");
  };

  return (
    <div>
      <Header />
      <div className={searchStyles.cont}>
        <div className={searchStyles.search}>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Search</button>
        </div>

        {waiting ? (
          <UserCard key={searchUser.id} title={searchUser.login} />
        ) : null}
      </div>
    </div>
  );
};

export default Searchs;
