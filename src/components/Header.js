import styles from "../css/Header.module.css";
import { AiFillGithub } from "react-icons/ai";
import { useNavigate, NavLink } from "react-router-dom";
import ROUTES from "../config/routes";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <AiFillGithub
            onClick={() => navigate("../")}
            className={styles.git}
          />
        </div>
        <div className={styles.dash}>
          <ul>
            <NavLink className={styles.li} to={ROUTES.DASHBOARD}>
              Dashboard
            </NavLink>
            <NavLink className={styles.li} to={ROUTES.SEARCHS}>
              Search
            </NavLink>
            {/* <NavLink className={styles.li} to={ROUTES.FAVORITES}>
              Favorites
            </NavLink> */}
          </ul>
          <button onClick={logout} className={styles.dashbtn}>
            Log Out
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
