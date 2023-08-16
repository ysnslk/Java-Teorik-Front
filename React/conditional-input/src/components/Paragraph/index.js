import React, { useState } from "react";
import Input from "../Input";

const Paragraph = () => {
  const [string,setString]= useState("");
  const onChange = (value) =>{
    console.log(value);
    setString(value);
  }
  return (
    <>
      <Input onChange={onChange}/>
      <p>{string}</p>
    </>
  );
};

export default Paragraph;
