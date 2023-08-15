import React, { useState } from "react";
import Popover from "../Popover";

import "./index.scss";

const ChangableButton = () => {
  const [buttontText, setButtonText] = useState("");
  const [childrenText, setChildrenText] = useState();

  const onChangeInput = (e) => {
    const value = e.target.value;
    setButtonText(value);
    console.log(e.target.value);
  };
  const onChangeChildren = (e) => {
    const value = e.target.value;
    setChildrenText(value);
  };
  return (
    <div className="changableButton">
      <input type="text" onChange={onChangeInput} placeholder="Button Text"/>
      <input type="text" onChange={onChangeChildren} placeholder="Children Text"/>
      <Popover buttonText={buttontText}>{childrenText}</Popover>
    </div>
  );
};

export default ChangableButton;
