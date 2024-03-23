import React, { useEffect, useState } from "react";
import "./index.css";
import checkMark from "../../assets/images/svg/check-mark-white.svg";
import SubmitButton from "../../components/buttons/submitButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postPhoneNo } from "../../redux/actions/login";
import { savePhoneAndUserID } from "../../redux/reducers/login";

const SignUp = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClickLogin = () => {};

  const onClickContinue = () => {
    if(!checked) return;
   dispatch(postPhoneNo(phoneNo))?.unwrap()?.then(data=>{
    if(data?.type==="success") {
      dispatch(savePhoneAndUserID({
        phone:phoneNo,
        userID:data?.data?.userId,
      }))
      navigate("/otp_verification")};
   })
    // navigate("/otp_verification");
  };

  return (
    <div className="sign-up-container">
      <div className="content-container">
        <div className="sign-up-header">LogIn</div>
        <div className="sign-up-desc">
          Please enter your phone number and we’ll send you a SMS verification
          code
        </div>
        <div className="phone-number-textbox">
          <div className="title">Phone No</div>
          <input
            className="phone-no-input"
            type="tel"
            inputMode="tel"
            placeholder="10 digit mobile number"
            value={phoneNo}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            onChange={(e) => setPhoneNo(e?.target?.value)}
            max={10}
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
          <SubmitButton buttonTitle={"Continue"} onClick={onClickContinue} />
          {/* <div className="login-text">
            Already have an account? <span onClick={onClickLogin}>Log in</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
