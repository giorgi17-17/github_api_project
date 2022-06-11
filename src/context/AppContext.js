import { createContext, useEffect, useState } from "react";
import { getUsers } from "../http/fetching";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers(page)
      .then((res) => {
        setUser(res);
        setLoading(true);
      })
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <AppContext.Provider value={{ user, page, setPage, loading }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
