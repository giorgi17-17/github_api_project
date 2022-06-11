import { useContext, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import register from "../css/Register.module.css";
import ROUTES from "../config/routes";

const Signin = () => {
  const { state } = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={register.container}>
      <div style={{ color: "greenyellow" }}>
        {state?.success && <h5>Sign up was successful</h5>}
      </div>
      <br />
      <div className={register.ulheader}>
        <ul>
          <li className={register.active}>
            <NavLink className={register.li} to={ROUTES.SIGN_IN}>
              Sign In
            </NavLink>
          </li>
          <li>
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
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
