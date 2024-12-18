import { useDispatch, useSelector } from "react-redux";
import classes from "./authForm.module.css";
import { useRef, useState } from "react";
import Modal from "../LAYOUT/modal";
import { authActions } from "../../reduxStore/authSlice";
import { useNavigate } from "react-router-dom";

const AuthForm = (props) => {
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
          id: responseData.localId,
          email: responseData.email,
        })
      );
      navigate("");
      props.onSigned();
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
    <Modal onCancel={props.onCancel}>
      <form className={classes.authform} onSubmit={submitHandler}>
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
            {islogin ? "SIGN IN" : "SIGN UP"}
          </button>
        )}
        {!auth.loading && (
          <button onClick={toggleHandler} className={classes.toggle}>
            {islogin ? "Create Account" : "Login With Existing"}
          </button>
        )}
        {auth.loading && <div className={classes.loader}></div>}
      </form>
    </Modal>
  );
};

export default AuthForm;
