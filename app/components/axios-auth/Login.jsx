"use client";
import React from "react";
import { useRef, useState, useEffect } from "react";
function Login() {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  const handleSubmit = async (e) => {
    e.preventDefult();
    console.log(user, pwd);
    setUser();
    setPwd();
    setSuccess(true);
  };

  return (
    <section>
      <p>{errMsg}</p>
      <h1>sign in </h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="username"> Username: </label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />

        <label htmlFor="password"> password: </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button type="submit">sign in</button>
      </form>
    </section>
  );
}

export default Login;
