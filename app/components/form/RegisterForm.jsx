"use client";
import React, { useRef, useState } from "react";
import InputProp from "./InputProp";
function RegisterForm() {
  // const [username, setUsername] = useState("");
  // const usernameRef = useRef();
  // console.log(username)
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    comfirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "username",
    },
    {
      id: 2,
      name: "birthday",
      type: "text",
      placeholder: "birthday",
      label: "birthday",
    },
    {
      id: 3,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "username",
    },
    {
      id: 4,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "username",
    },
  ];
  const formPasach = {
    customer_id: "string",
    full_name: "string",
    birth_data: "1396/12/08",
    gender: "string",
    email: "string",
    landline: "string",
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // dont refresh the page after submiting
    const data = new FormData(e.target);

    console.log(Object.fromEntries(data.entries()));
  };
  return (
    <div className="text-black">
      <form onSubmit={handleSubmit}>
        {
          inputs.map((input)=>(
            <InputProp key={input.id} {...input} />
          ))
        }
      </form>


      {/* <form onSubmit={handleSubmit}>
        <InputProp
          name="Username"
          type="text"
          placeholder="username"
          // setUsername={setUsername}
        />
        <InputProp name="Email" type="email" placeholder="example@gmail.com" />
        <InputProp name="Password" type="password" placeholder="password" />
        <InputProp
          name="Confirm Password"
          type="password"
          placeholder="password"
        />
        <button type="submit" className="bg-green-400 rounded-full p-5 ml-20">
          SUBMIT
        </button>
      </form> */}
    </div>
  );
}

export default RegisterForm;
