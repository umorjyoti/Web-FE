import React, { useState } from "react";
import "./index.css";
import AddPropertyHeader from "../../components/header/AddPropertyHeader";
import Add from "../../assets/images/add.png";
import { PlusOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import SubmitButton from "../../components/buttons/submitButton";
import { useNavigate } from "react-router-dom";
const AddPropertyDetails = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    floor: 1,
    ammenities: [],
  });

  const navigate = useNavigate();

  const onClickAddFloor = () => {
    if (propertyDetails.floor < 100) {
      const temp = { ...propertyDetails };
      console.log("temp", temp);
      temp.floor += 1;
      setPropertyDetails({ ...temp });
    }
  };

  const onClickSubstractFloor = () => {
    if (propertyDetails.floor > 1) {
      const temp = { ...propertyDetails };
      temp.floor -= 1;
      setPropertyDetails(temp);
    }
  };

  const ammenities = [
    "Swimming Pool",
    "Gym",
    "Gated Community",
    "Parking",
    "Washing Machine",
    "Dryer",
    "Pet Friendly",
    "Power Backup",
    "Somke Alarm",
    "Front-Garden",
  ];

  const onClickAddRoomType = () => {
    console.log("navigate");
    navigate("add_room_type");
  };

  return (
    <>
      <AddPropertyHeader title={"Sai Homes"} />
      <div className="property-details-container">
        <div className="property-details-header">Property Details</div>
        <div className="floors-details space-top">
          <div className="sub-title">Floors</div>
          <div className="adding-floor">
            <div onClick={onClickSubstractFloor} className="substract-floor">
              -
            </div>
            <input
              type="text"
              className="floor-input"
              max={99}
              value={propertyDetails.floor}
              onChange={(e) => {
                const temp = { ...propertyDetails };
                temp.floor =
                  parseInt(e.target.value ? e.target.value : 0) > 0 &&
                  parseInt(e.target.value ? e.target.value : 0) < 100
                    ? parseInt(e.target.value ? e.target.value : 0)
                    : 1;
                setPropertyDetails(temp);
              }}
            />
            <div className="add-floor" onClick={onClickAddFloor}>
              +
            </div>
          </div>
        </div>
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
        </div>
        <div className="common-ammenities">
          <div className="property-details-header">Common Ammenities</div>
          {ammenities?.map((item) => (
            <div className="ammenity-card">
              <div className="sub-title">{item}</div>
              <Checkbox onChange={() => {}}></Checkbox>
            </div>
          ))}
        </div>
      </div>
      <div className="btn-submit-fixed">
        <SubmitButton onClick={() => {}} buttonTitle="Save" />
      </div>
    </>
  );
};

export default AddPropertyDetails;
