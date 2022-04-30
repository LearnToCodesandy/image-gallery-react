import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  const [toggle, setToggle] = useState(false);

  // handlers
  const handleGuestEntry = () => {
    const temp = {
      name: "Sample name",
      loginStatus: true
    };
    setUser(temp);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const signup__fd = new FormData(e.target);
    const username = signup__fd.get("username");
    const password = signup__fd.get("password");
    const repassword = signup__fd.get("repassword");
    if (password === repassword) {
      setUser({ name: username, loginStatus: true });
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const signin__fd = new FormData(e.target);
    const user = signin__fd.get("user");
    // const password = signin__fd.get("pass");
    // console.log({ user, password });
    // check for the user!
    setUser({ name: user, loginStatus: true });
  };

  return (
    <div className="form__container">
      <button className="btn" onClick={handleGuestEntry}>
        Guest entery
      </button>
      {/* signup form */}
      {toggle ? (
        <form className="signup" onSubmit={(e) => handleSignUp(e)}>
          <h3 className="title">Sign Up</h3>
          <div className="form__item">
            <label htmlFor="username">Username *</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username..."
              required={true}
            />
          </div>
          <div className="form__item">
            <label htmlFor="email">Email Id</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gnail.com"
            />
          </div>

          <div className="form__item">
            <label htmlFor="password">Password *</label>
            <input type="password" name="password" id="password" />
          </div>

          <div className="form__item">
            <label htmlFor="repassword">Re-Password *</label>
            <input type="password" name="repassword" id="repassword" />
          </div>

          <input
            type="submit"
            className="btn btn-primary-outlined"
            value="Sign Up"
          />
        </form>
      ) : (
        <form className="signup" onSubmit={(e) => handleSignIn(e)}>
          <h3 className="title">Sign In</h3>

          <div className="form__item">
            <label htmlFor="mail">Username *</label>
            <input
              type="user"
              name="user"
              id="user"
              placeholder="example user..."
              required={true}
            />
          </div>

          <div className="form__item">
            <label htmlFor="pass">Password</label>
            <input type="password" name="pass" id="pass" required={true} />
          </div>

          <input
            type="submit"
            className="btn btn-primary-outlined"
            value="Sign In"
          />
        </form>
      )}
      {!toggle ? (
        <p>
          Need an account?{" "}
          <span className="link" onClick={() => setToggle(!toggle)}>
            Sign Up
          </span>
        </p>
      ) : (
        <p>
          Already have an account?{" "}
          <span className="link" onClick={() => setToggle(!toggle)}>
            Sign In
          </span>
        </p>
      )}
    </div>
  );
};

export default Login;
