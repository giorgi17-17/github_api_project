import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ROUTES from "../config/routes";
import { createNewUser } from "../http/auth";
import * as register from "../css/Register.module.css";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleInput(e) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const test = await createNewUser(user);
      console.log(test);
      navigate(`${ROUTES.SIGN_IN}`, { state: { success: true } });
    } catch (error) {
      // console.log(error);
    }
  }

  return (
    <div className={register.container}>
      <div className={register.ulheader}>
        <ul>
          <li>
            <NavLink className={register.li} to={ROUTES.SIGN_IN}>
              Sign In
            </NavLink>
          </li>
          <li className={register.active}>
            <NavLink className={register.li} to={ROUTES.SIGN_UP}>
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
      <form style={{ marginTop: "2.5rem" }}>
        <label htmlFor="username">
          Username
          <input
            name="username"
            id="username"
            value={user.username}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="firstName">
          First Name
          <input
            name="firstName"
            id="firstName"
            value={user.firstName}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            name="lastName"
            id="lastName"
            value={user.lastName}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            name="email"
            id="email"
            type="email"
            value={user.email}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="birthDate">
          Date of birth
          <input
            name="birthDate"
            id="birthDate"
            type="date"
            value={user.birthDate}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            name="password"
            id="password"
            type="password"
            value={user.password}
            onChange={handleInput}
          />
        </label>
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
