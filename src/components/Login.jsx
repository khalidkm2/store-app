import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const email = useRef()
  const password = useRef()

  const handleSignInSignup = () => {
    

    if (!isSignin) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          console.log("signin successfully");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };

  const toogleSignIn = () => {
    setIsSignin(!isSignin);
  };

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
            <input required className=" border my-2" id="name" type="text" />
          </div>
        )}
        <div className=" flex flex-col">
          <label htmlFor="email">Your email</label>
          <input ref={email} required className=" border my-2" id="email" type="email" />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="email">Your Password</label>
          <input ref={password} required className=" border my-2" id="email" type="password" />
        </div>
        <p onClick={toogleSignIn}>
          {isSignin ? "New User sign up first" : "Already have and accout:"}
        </p>
        <button
          onClick={handleSignInSignup}
          className=" w-full bg-green-700 text-white py-2 my-3"
        >
          sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
