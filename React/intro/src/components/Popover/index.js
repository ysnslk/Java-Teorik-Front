import React, { useState } from "react";
import "./index.scss";

const initialState = false;

const Popover = ({ buttonText, children }) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const onClickButton = () => {
    // setIsVisible((prevState) => {
    //   return !prevState;
    // });
    setIsVisible((prevState) => {
      return !prevState;
    });
  };

  const onBlurButton = () => {
    setIsVisible(false);
  };

  return (
    <div className="popover">
      <button
        className="popover-button"
        onClick={onClickButton}
        onBlur={onBlurButton}
      >
        {buttonText}
      </button>
      {children && isVisible && <div className="popover-box">{children}</div>}
    </div>
  );
};

export default Popover;
