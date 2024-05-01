"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
function AxiosRequest() {
  const [data, setData] = useState([]);
  const URL = "http://192.168.8.100:3000/auth/login"
  const [phone, setPhone] = useState('')
  const [level, setLevel] = useState('')
  // useEffect(() => {
  //   axios
  //     .post(URL, {
  //       "mobile": phone,
  //       "level": "1",
  //       "otp_code": "string"
  //     })
  //     .then((res) => setData(res) & console.log(res))
  //     .catch((err) => console.log(err));
  // }, [phone]);

  return (
    <div>
      <h1>axios request </h1>
      <div>
        
      </div>
    </div>
  );
}

export default AxiosRequest;
