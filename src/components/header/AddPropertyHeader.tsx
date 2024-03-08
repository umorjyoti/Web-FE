import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Back from "../../assets/images/svg/back.svg";

const AddPropertyHeader = (props: any) => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <div onClick={onClickBack} className="header-container-add-property">
      <img src={Back} className="back-icon align-back-icon " />
      <div className="page-title">{props?.title}</div>
    </div>
  );
};

export default AddPropertyHeader;
