import React from "react";
import "./index.css";

import Back from "../../assets/images/svg/back.svg";
import logo from "../../assets/images/svg/logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <div onClick={onClickBack} className="header-container">
      <img src={Back} className="back-icon" />
      <img src={logo} className="logo" />
    </div>
  );
};

export default Header;
