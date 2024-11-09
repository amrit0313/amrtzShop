import { useDispatch, useSelector } from "react-redux";
import classes from "./authForm.module.css";
import { useRef, useState } from "react";
import { authActions } from "../../reduxStore/authSlice";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const emailInputRef = useRef();
  const auth = useSelector((state) => state.auth);
  const passwordInputRef = useRef();

  const [islogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    dispatch(authActions.loginStart());
    let urL;
    if (islogin) {
      urL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCD5FdfD3dH-PTwBZ7U74DHaOXwjl0WhwE";
    } else {
      urL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCD5FdfD3dH-PTwBZ7U74DHaOXwjl0WhwE";
    }
    try {
      const response = await fetch(urL, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const responseData = await response.json();
      console.log(responseData);
      if (!response.ok) {
        if (responseData && responseData.error && responseData.error.message) {
          throw new Error(responseData.error.message);
        } else {
          throw new Error("Authentication Failed");
        }
      }
      dispatch(
        authActions.loginSucesss({
          idToken: responseData.idToken,
          localId: responseData.localId,
        })
      );
      navigate("");
      console.log("success:", responseData);
    } catch (error) {
      dispatch(authActions.loginFailure(error.message));
      alert(error.message);
    }
  };

  const toggleHandler = (e) => {
    e.preventDefault();
    setIsLogin((prev) => !prev);
  };
  return (
    <div className={classes.authDiv}>
      <form onSubmit={submitHandler}>
        <label>E-mail</label>
        <input
          placeholder="Enter Your Name"
          type="email"
          id="email"
          ref={emailInputRef}
        />
        <label>password</label>
        <input
          placeholder="Enter Your Password"
          id="password"
          type="password"
          ref={passwordInputRef}
        />
        {!auth.loading && (
          <button type="submit" className={classes.button}>
            {islogin ? "login" : "Create Account"}
          </button>
        )}
        {!auth.loading && (
          <button onClick={toggleHandler} className={classes.toggle}>
            {islogin ? "Create Account" : "Login With Existing"}
          </button>
        )}
        {auth.loading && <p style={{ color: "blue" }}>Sending Request</p>}
      </form>
    </div>
  );
};

export default AuthForm;
