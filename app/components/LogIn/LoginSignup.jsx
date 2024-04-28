import React from "react";

function LoginSignup() {
  return (
    <div className="m-[100px] bg-green-500 rounded-3xl  font-bold">
      <form className="m-10">
        <label htmlFor="" className=" block text-center mt-5 text-white">
          {" "}
          LOG IN WITH EMAIL
        </label>
        <div className="justify-center flex">
          <input
            type="email"
            placeholder="example@gmail.com"
            className="m-10"
          />
          <input
            type="password"
            placeholder="Make sure no one is looking"
            className="m-10"
          />
        </div>
        <div className="justify-center flex text-white">
          <button type="submit" className="m-10 bg-blue-800 p-5 rounded-3xl">
            LOGIN
          </button>
          <button type="reset" className="m-10 bg-rose-800 p-5 rounded-3xl">
            SIGN UP
          </button>
          <button type="submit" className="m-10 bg-blue-800 p-5 rounded-3xl">
            LOST PASSWORD
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginSignup;
