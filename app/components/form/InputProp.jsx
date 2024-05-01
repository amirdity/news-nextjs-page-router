
import React from "react";

function InputProp(props) {
  return (
    <div>
      <div className="flex flex-row">
        <label className="m-5 w-[150px] flex mx-10">{props.name}</label>
        <input name={props.name} type={props.type} placeholder={props.placeholder} className="border-blue-600 border-solid border my-2 p-2"/>
      </div>
    </div>
  );
}

export default InputProp;
