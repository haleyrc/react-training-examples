import React, { useState, useContext } from "react";
import { StyledButton } from "./Button";

const LoggedInContext = React.createContext(false);

const ContextApp = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <LoggedInContext.Provider value={loggedIn}>
      <div>
        <Toggle isLoggedIn={loggedIn} onToggle={() => setLoggedIn(!loggedIn)} />
        <div>I'm available to everyone</div>
        <SecureDiv />
      </div>
    </LoggedInContext.Provider>
  );
};

const SecureDiv = () => {
  const isLoggedIn = useContext(LoggedInContext);
  return isLoggedIn ? (
    <div>Visible only when logged in</div>
  ) : (
    <div>Please login to view</div>
  );
};

const Toggle = ({ isLoggedIn, onToggle }) => (
  <StyledButton
    handleOnClick={onToggle}
    title={isLoggedIn ? "Log Out" : "Log In"}
  />
);

export default ContextApp;
