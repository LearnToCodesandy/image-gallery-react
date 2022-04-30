import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Settings = () => {
  const [quote, setQuote] = useState({});
  const [user, setUser] = useContext(UserContext);
  const nav = useNavigate();
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        const temp = {
          content: data.content,
          author: data.author
        };
        setQuote(temp);
      });
  }, []);
  return (
    <div className="settings__container">
      <h1 className="title">Settings</h1>
      <div className="quote__container">
        {quote.content ? (
          <p className="quote__text">{quote.content}</p>
        ) : (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            ratione?
          </p>
        )}

        {quote.author ? (
          <span className="quote__author">~{quote.author}</span>
        ) : (
          <span className="quote__author">~ Lorem ipsum dolor sit amet.</span>
        )}
      </div>
      <button
        className="btn btn-danger log__out"
        onClick={() => {
          setUser({ ...user, loginStatus: false });
          nav("/", { replace: true });
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Settings;
