import { AppContextProvider } from "./context/AppContext";

import Routes from "./Routes";

const App = () => {
  return (
    <>
      <AppContextProvider>
        <Routes />
      </AppContextProvider>
    </>
  );
};

export default App;
