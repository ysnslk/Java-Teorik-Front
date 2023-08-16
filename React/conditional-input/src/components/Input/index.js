import React, { useState } from "react";

const Input = ({ onChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onChangeCheckBox = (e) => {
    setIsVisible(e.target.checked);
  };

  const onChangeInput = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <>
      <input type="checkbox" onChange={onChangeCheckBox} />
      {isVisible && <input type="text" onChange={onChangeInput} />}
    </>
  );
};

export default Input;
