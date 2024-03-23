import React, { useState, useEffect } from "react";
import "./index.css";
import Header from "../../components/header";
import SubmitButton from "../../components/buttons/submitButton";
import { getUserJWT, saveUserJWT } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyOTP } from "../../redux/actions/login";

const OTPVerification = (props) => {
  console.log("props",props)
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const [showVerify, setShowVerify] = useState(false);
  const userJWT = getUserJWT();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log("data", data)

  useEffect(() => {
    if (otp?.join("")?.length === 5) setShowVerify(true);
  }, [otp]);

  const handleChange = (element, index) => {
    if (isNaN(element?.value)) return false;

    setOtp([...otp.map((item, idx) => (idx === index ? element.value : item))]);
    if (element?.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const onClickVerify = () => {
    dispatch(verifyOTP({}))?.unwrap()?.then(data=>{
      if(data?.type==="success"){
        saveUserJWT(data?.data?.token);
        props?.setJWT(data?.data?.token)
        
      }
    })
  }

  return (
    <div className="opt-screen">
      <Header />
      <div className="opt-container">
        <div className="otp-container-header">Enter Code</div>
        <div className="otp-container-desc">
          We’ve sent an SMS with an activation code to your phone +91 9678872137{" "}
        </div>
        <div className="otp-inputs">
          {otp?.map((item, index) => {
            return (
              <input
                key={index}
                type="text"
                name="otp"
                maxLength={1}
                className="otp-field"
                value={item}
                onChange={(e) => handleChange(e?.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
        </div>
        {showVerify ? (
          <div>
            <SubmitButton
              buttonTitle={"Verify"}
              onClick={
                onClickVerify}
            />
            <div className="sub-header-text">
              I didn’t receive a code <span>Resend</span>
            </div>
          </div>
        ) : (
          <div onClick={() => { }} className="send-code">
            Send Code again <span>{`  00:${"20"}`}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default OTPVerification;
