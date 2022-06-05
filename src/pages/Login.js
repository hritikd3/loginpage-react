import React, { useState } from "react";
import { userSignup, userSignin } from "../auth/auth";

function Login() {
  const [showSignup, setShowSignup] = useState(true);
  const [userSignupData, setUserSignupData] = useState({});
  const [message, setMessage] = useState("");

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const updateSignupData = (e) => {
    userSignupData[e.target.id] = e.target.value;
    console.log(userSignupData);
  };

  const signupFn = (e) => {
    const username = userSignupData.username;
    const userId = userSignupData.userId;
    const email = userSignupData.email;
    const password = userSignupData.password;

    const data = {
      name: username,
      userId: userId,
      email: email,

      password: password
    };

    console.log("DATA", data);

    e.preventDefault();

    userSignup(data)
      .then(function (response) {
        if (response.status === 201) {
          window.location.href = "/";
        }
      })
      .catch(function (error) {
        if (error.response.status === 400) {
          setMessage(error.response.data.message);
        } else {
          console.log(error);
        }
      });
  };

  const loginFn = (e) => {
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
  };

  return (
    <div className="bg-primary d-flex justify-content-center align-items-center vh-100">
      <div className="card m-5 p-5">
        <div className="row">
          <div className="col">
            {!showSignup ? (
              <div className="login">
                <form onSubmit={loginFn}>
                  <img
                    style={{ height: "53px" }}
                    src={
                      "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo-700x394.png"
                    }
                    alt="inds"
                  />
                  <h4> Signin </h4>{" "}
                  <div className="input-group m-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email "
                      id="userId"
                      required
                    />
                  </div>
                  <div className="input-group m-1">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      id="password"
                      required
                    />
                  </div>
                  <div className="input-group m-1">
                    <input
                      type="submit"
                      className="form-control btn btn-primary"
                      value="Log in"
                      required
                    />
                  </div>
                  <div
                    className="text-info text-center pe-auto"
                    onClick={toggleSignup}
                  >
                    New User?{" "}
                    <span className="text-decoration-underline text-dark">
                      Create Account{" "}
                    </span>{" "}
                  </div>
                </form>
              </div>
            ) : (
              <div className="signup">
                <form onSubmit={signupFn}>
                  <img
                    style={{ height: "53px" }}
                    src={
                      "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo-700x394.png"
                    }
                    alt="animna"
                  />
                  <h4> Create account </h4>
                  <div className="input-group m-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      id="userId"
                      onChange={updateSignupData}
                      required
                    />
                  </div>

                  <input
                    type="email"
                    className="form-control m-1"
                    placeholder="Email"
                    id="email"
                    onChange={updateSignupData}
                    required
                  />
                  <div className="input-group m-1">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      id="password"
                      required
                    />
                  </div>
                  <div className="input-group m-1">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="confirm password"
                      id="password"
                      required
                    />
                  </div>

                  <div className="input-group m-1">
                    <input
                      type="submit"
                      className="form-control btn btn-primary"
                      value="Create"
                    />
                  </div>
                  <div className="text-info text-center" onClick={toggleSignup}>
                    account already exists?{" "}
                    <span className="text-dark text-decoration-underline">
                      {" "}
                      Continue
                    </span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
