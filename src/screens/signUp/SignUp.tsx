import React, { useState } from "react";
import "./index.css";
import checkMark from "../../assets/images/svg/check-mark-white.svg";
import continueBtn from "../../assets/images/svg/continue-btn-arrow.svg";

const SignUp = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div className="sign-up-container">
      <div className="content-container">
        <div className="sign-up-header">Sign Up</div>
        <div className="sign-up-desc">
          Please enter your phone number and we’ll send you a SMS verification
          code
        </div>
        <div className="phone-number-textbox">
          <div className="title">Phone No</div>
          <input
            className="phone-no-input"
            type="text"
            placeholder="10 digit mobile number"
          />
          <div className="check-mark">
            <img
              onClick={() => setChecked(!checked)}
              alt="check-mark"
              src={checkMark}
              className={checked ? "check-mark-img active" : "check-mark-img"}
            />
            <div className="check-mark-text">
              I accept the terms and privacy policy
            </div>
          </div>
          <button disabled={false} className="submit-btn">
            <div className="btn-title">Continue</div>
            <img alt="btn-icon" src={continueBtn} className="btn-img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
