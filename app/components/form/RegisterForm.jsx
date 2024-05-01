"use client";
import React, { useEffect, useRef, useState } from "react";
import InputProp from "./InputProp";
import axios from "axios";
function RegisterForm() {
  // const [username, setUsername] = useState("");
  // const usernameRef = useRef();
  // console.log(username)
  const token = "qwert"
  const [values, setValues] = useState({
    //real
    customer_id: "29b64752-9532-4360-b570-5ad9cd956628",
    full_name: "amirfattahi",
    birth_data: "1396/12/08",
    gender: "مرد",
    email: "test@yahoo.com",
    landline: "05147214788",
    //example
    // username: "",
    // email: "",
    // birthday: "",
    // password: "",
    // comfirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "customer_id",
      type: "text",
      placeholder: "002....",
      label: "Customer ID",
    },
    {
      id: 2,
      name: "full_name",
      type: "text",
      placeholder: "enter your name",
      label: "Full Name",
    },
    {
      id: 3,
      name: "birth_data",
      type: "date",
      placeholder: "1377/../..",
      label: "Birth data",
    },
    {
      id: 4,
      name: "gender",
      type: "text",
      placeholder: "مرد یا زن",
      label: "gender",
    },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder: "example@gmail.com",
      label: "Email",
    },
    {
      id: 6,
      name: "landline",
      type: "text",
      placeholder: "021....",
      label: "Land line",
    },
  ];
  const ApiFormPasach = {
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

    // console.log(Object.fromEntries(data.entries()));
    setValues(Object.fromEntries(data.entries()));
    
  };
  // const onChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  //   console.log("ok");
  // };
  useEffect(() => {
    console.log(values);
    axios.post("http://192.168.8.100:3003/customer/completion-info", {myApi},{headers: {
      'Authorization': `${token}`}}).then(res=>console.log(res)).catch(error => console.log(error.response.data.message));

  }, [values]);
  const myApi = JSON.stringify(values);

  return (
    <div className="text-black ">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <InputProp key={input.id} {...input} value={values[input.name]} />
        ))}
        <button type="submit" className="bg-green-400 rounded-full p-5 ml-20">
          SUBMIT
        </button>
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
