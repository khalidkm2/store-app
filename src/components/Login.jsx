import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../app/userSlice";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { formValidate } from "../utils/validate";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const fullName = useRef();
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleValidation = () => {
    const msg = isSignin
      ? formValidate(email.current.value, password.current.value)
      : formValidate(
          email.current.value,
          password.current.value,
          fullName.current.value
        );
    setErrorMessage(msg);

    if (msg) return;

    if (!isSignin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);

          updateProfile(user, {
            displayName: fullName.current.value,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              // console.log(error);
              console.log(error);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode );
          // ..
        });
    } else {
      // console.log("Inside signin with email and password");
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          const { uid, email, displayName } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
            })
          );
          navigate("/profile");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toogleSignIn = () => {
    setIsSignin(!isSignin);
  };

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user]);

  return (
    <div className=" flex items-center justify-center h-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" border border-black p-10 "
      >
        <h1 className=" text-lg font-bold my-2 py-6 text-blue-500">
          Login to your account
        </h1>
        {!isSignin && (
          <div className=" flex flex-col">
            <label htmlFor="name">Your FullName</label>
            <input
              ref={fullName}
              required
              className=" border my-2"
              id="name"
              type="text"
            />
          </div>
        )}
        <div className=" flex flex-col">
          <label htmlFor="email">Your email</label>
          <input
            ref={email}
            required
            className=" border my-2"
            id="email"
            type="email"
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="email">Your Password</label>
          <input
            ref={password}
            required
            className=" border my-2"
            id="email"
            type="text"
          />
        </div>
        <p className=" py-3 text-red-600 text-sm font-semibold">
          {errorMessage}
        </p>
        <p className="  py-1 text-blue-900 cursor-pointer italic font-semibold underline" onClick={toogleSignIn}>
          {isSignin ? "Haven't account sign up first" : "Already have and accout?"}
        </p>
        <button
          onClick={handleValidation}
          className=" w-full bg-green-700 text-white py-2 my-3"
        >
          {isSignin?"Sign in":"Sign up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
