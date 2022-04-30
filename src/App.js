import React, { useContext } from "react";
import Wrapper from "./components/Wrapper";
import Login from "./components/Login";
import "./style.css";
import { UserContext } from "./context/UserContext";

export default function App() {
  const [user] = useContext(UserContext);

  return (
    <div className="container">
      {user.loginStatus ? <Wrapper /> : <Login />}
    </div>
  );
}
