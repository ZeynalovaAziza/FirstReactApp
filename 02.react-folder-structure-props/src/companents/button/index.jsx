import React from "react";
import "./index.scss";
const PrimaryButton = (props) => {
 

  const handleClick = () => {
    console.log("Yatmiyin!!!");
  };
  return (
    <button
      onClick={() => handleClick()}
      className={
        props.bg === "orange" ? "primary-btn bg-orange" : "primary-btn"
      }
    >
      {props.btnTextContent}
    </button>
  );
};

export default PrimaryButton;