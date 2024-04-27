"use client";
import React, { useState } from "react";
import { auth } from "../firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="m-[100px] bg-green-500 rounded-3xl  font-bold">
      <form onSubmit={signIn} className="m-10">
        <label htmlFor="" className=" block text-center mt-5 text-white">
          {" "}
          SIGN UP WITH EMAIL
        </label>
        <div className="justify-center flex">
          <input
            type="email"
            placeholder="example@gmail.com"
            className="m-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Make sure no one is looking"
            className="m-10"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          />
        </div>
        <div className="justify-center flex text-white">
          <button type="submit" className="m-10 bg-blue-800 p-5 rounded-3xl">
            SIGNIN
          </button>
          <button type="reset" className="m-10 bg-rose-800 p-5 rounded-3xl">
            RESET
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
