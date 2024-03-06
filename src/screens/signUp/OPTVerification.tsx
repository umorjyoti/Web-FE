import React, { useState } from "react";
import Header from "../../components/header";

const OTPVerification = () => {
  const [otp, setOtp] = useState(new Array(5).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element?.value)) return false;

    setOtp([...otp.map((item, idx) => (idx === index ? element.value : item))]);

    if (element?.nextSibling) {
      element.nextSibling.focus();
    }
  };

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
          })}{" "}
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
