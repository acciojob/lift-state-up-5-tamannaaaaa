import React, { useState } from "react";
import Login from "./Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{isLoggedIn ? "Welcome! You are logged in." : "Please log in"}</h1>
      {!isLoggedIn && <Login onLogin={handleLogin} />}
    </div>
  );
};

export default App;
