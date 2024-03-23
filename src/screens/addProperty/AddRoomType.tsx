import React, { useState } from "react";
import "./index.css";
import AddPropertyHeader from "../../components/header/AddPropertyHeader";
import { PlusOutlined } from "@ant-design/icons";
import RoomTypeEmpty from "../../assets/images/room-type-empty.png";
import SubmitButton from "../../components/buttons/submitButton";
import { useNavigate } from "react-router-dom";
import { FormItemProps, Form, Modal, Input, Select } from "antd";

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

function toArr(
  str: string | number | (string | number)[]
): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};

const { Option } = Select;

const AddRoomType = () => {
  const [addRoomModal, setAddRoomModal] = useState(false);
  const navigate = useNavigate();
  const onClickAddRoomType = () => {
    setAddRoomModal(true);
  };
  const onClickSaveRoomType = () => {
    navigate("add_rooms_to_floor");
  };
  const onFinish = (value: object) => {
    console.log(value);
  };
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
        <SubmitButton onClick={onClickSaveRoomType} buttonTitle="Save" />
      </div>
      <Modal
        title="Room Type Details"
        open={addRoomModal}
        onCancel={() => {
          setAddRoomModal(false);
        }}
        centered={true}
        footer={false}
        className="add-prop-modal"
      >
        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
          <MyFormItemGroup prefix={["roomType"]}>
            <MyFormItem name="sharing_type" label="Sharing Type">
              <Select placeholder="Select Type">
                <Option value="SingleSharing">Single Sharing</Option>
                <Option value="DoubleSharings">Double Sharing</Option>
                <Option value="Multiple Sharing">MultipleSharing</Option>
              </Select>
            </MyFormItem>
            <MyFormItem name="unit_type" label="Unit Type">
              <Select placeholder="Select Unit Type">
                <Option value="SingleRoom">Single Room</Option>
                <Option value="Hall">Hall</Option>
                <Option value="1RK">1RK</Option>
                <Option value="1BHK">1BHK</Option>
                <Option value="2BHK">2BHK</Option>
                <Option value="3BHK">3BHK</Option>
              </Select>
            </MyFormItem>
            <MyFormItem name="facalities" label="Facalities">
              <Select placeholder="Add Facalities" mode="multiple">
                <Option value="Gym">Gym</Option>
                <Option value="WashingMachine">Washing Machine</Option>
                <Option value="OpenArea">Open Area</Option>
                <Option value="Dryer">Dryer</Option>
                <Option value="Room Service">Room Service</Option>
              </Select>
            </MyFormItem>
            <MyFormItem name="rent" label="Rent">
              <Input placeholder="Rent" />
            </MyFormItem>
            <MyFormItem name="deposit" label="Deposit">
              <Input placeholder="Deposit" />
            </MyFormItem>
          </MyFormItemGroup>

          <SubmitButton
            buttonTitle="Add Property"
            onClick={() => {
              setAddRoomModal(false);
            }}
          />
        </Form>
      </Modal>
    </>
  );
};

export default AddRoomType;
