import React, { useState } from "react";
import firebase from "./../firebase";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [handleButton, setHandleButton] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  // console.table(history);
  const switchLogin = () => {
    setHandleButton(!handleButton);
  };
  const register = () => {
    console.log(password.length);
    if (email !== "" && password !== "" && password.length >= 6) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          resetInput();
          history.goBack();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert("Password should be greater equal to 6 characters");
    }
  };
  const login = () => {
    if (email !== "" && password !== "" && password.length >= 6) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          resetInput();
          history.goBack();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert("Password should be greater equal to 6 characters");
    }
  };
  const logout = () => {
    firebase.auth().signOut();
    history.push("/");
  };
  const resetInput = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="back__back2">
        <div className="container back__back justify-content-end">
          <div className="row row__row   justify-content-center">
            <div className="col col-sm-11  d-flex justify-content-start">
              <h2>{handleButton ? "Login" : "Sign Up"}</h2>
            </div>
            <div className="col col-sm-1  d-flex justify-content-end">
              <button
                type="button"
                onClick={logout}
                className="btn btn-outline-danger"
              >
                Logout
              </button>
            </div>
            <div className="col-12" style={{ marginTop: "25px" }}>
              <div className="form-group ">
                <label>Email address</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
            <div className="col-12 ">
              <div className="form-group justify-content-center ">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              {handleButton ? (
                <h8 style={{ color: "pink" }}>Forget Password?</h8>
              ) : null}
              <h7
                onClick={switchLogin}
                style={{ color: "white", cursor: "pointer" }}
              >
                {handleButton ? (
                  <div>
                    Not any account?{" "}
                    <span className="switchLogins">Sign Up Here</span>
                  </div>
                ) : (
                  <div>
                    Already have an account?{" "}
                    <span className="switchLogins">Login here</span>
                  </div>
                )}
              </h7>
            </div>
            <div style={{ marginTop: "25px" }}>
              {handleButton ? (
                <button
                  type="button"
                  onClick={login}
                  className="btn btn-danger btn-lg text-center"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={register}
                  type="button"
                  className="btn btn-danger btn-lg text-center"
                >
                  SignUp
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
