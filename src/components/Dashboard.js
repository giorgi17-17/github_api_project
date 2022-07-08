import Header from "./Header";
import UserCard from "./UserCard";
import dashboardStyles from "../css/Dashboard.module.css";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const { user, setPage } = useContext(AppContext);

  return (
    <div className={dashboardStyles.main}>
      <Header />
      <div className={dashboardStyles.cont}>
        {user.map((users) => {
          return <UserCard key={users.id} title={users.login} />;
        })}
      </div>
      <button
        className={dashboardStyles.mainbtn}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Load More
      </button>
    </div>
  );
};

export default Dashboard;
