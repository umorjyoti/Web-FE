import React from "react";
import "./index.css";
import continueBtn from "../../../assets/images/svg/continue-btn-arrow.svg";

type SubmitButton = {
  buttonTitle: string;
  onClick: any;
};

const SubmitButton = (props: SubmitButton) => {
  return (
    <button onClick={props?.onClick} disabled={false} className="submit-btn">
      <div className="btn-title">{props?.buttonTitle}</div>
      <img alt="btn-icon" src={continueBtn} className="btn-img" />
    </button>
  );
};

export default SubmitButton;
