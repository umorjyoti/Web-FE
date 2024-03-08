import React from "react";
import "./index.css";
import AddPropertyHeader from "../../components/header/AddPropertyHeader";
import { PlusOutlined } from "@ant-design/icons";
import RoomTypeEmpty from "../../assets/images/room-type-empty.png";
import SubmitButton from "../../components/buttons/submitButton";

const AddRoomType = () => {
  const onClickAddRoomType = () => {};
  return (
    <>
      <AddPropertyHeader title={"Umor Homes"} />
      <div className="property-details-container">
        <div className="select-room-type">
          <div className="property-details-header">Select Room Type</div>
          <div className="room-type-container">
            <div onClick={onClickAddRoomType} className="add-button">
              <div className="add-btn-img-container">
                <PlusOutlined className="add-button-img" />
              </div>

              <div className="add-button-text">Add Room</div>
            </div>
          </div>
          <div className="empty-div">
            <img className="empty-img" src={RoomTypeEmpty} />
            <div className="empty-title">Add your first type</div>
          </div>
        </div>
      </div>
      <div className="btn-submit-fixed">
        <SubmitButton onClick={() => {}} buttonTitle="Save" />
      </div>
    </>
  );
};

export default AddRoomType;
