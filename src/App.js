import React from "react";
import Wrapper from "./components/Wrapper";

import "./style.css";

export default function App() {
  const userLogin = true;

  return <div className="container">{userLogin ? <Wrapper /> : ""}</div>;
}
