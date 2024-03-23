import React, { useState } from "react";
import AddPropertyHeader from "../../components/header/AddPropertyHeader";

import "./index.css";
import SubmitButton from "../../components/buttons/submitButton";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { FormItemProps, Form, Select, Modal, Input } from "antd";

const floors = [
  {
    floor: 1,
    name: "Ground Floor",
  },
  {
    floor: 2,
    name: "First Floor",
  },
  {
    floor: 3,
    name: "2nd Floor",
  },
  {
    floor: 4,
    name: "3rd Floor",
  },
  {
    floor: 5,
    name: "4th Floor",
  },
  {
    floor: 6,
    name: "5th Floor",
  },
  {
    floor: 7,
    name: "6th Floor",
  },
  {
    floor: 8,
    name: "7th Floor",
  },
  {
    floor: 9,
    name: "8th Floor",
  },
  {
    floor: 10,
    name: "9th floor",
  },
];

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

const AddRoomsToFloor = () => {
  const [activeFloor, setActiveFloor] = useState(1);
  const [addRoomModal, setAddRoomModal] = useState(false);

  const onClickAddRoom = () => {
    setAddRoomModal(true);
  };
  const onClickcloseRoomModal = () => {
    setAddRoomModal(false);
  };

  const navigate = useNavigate();
  const onClickFloorDetails = () => {
    navigate("/dashboard");
  };
  const onclickFloor = (floor: any) => {
    setActiveFloor(floor);
  };

  return (
    <>
      <AddPropertyHeader title={"Umor Homes"} />
      <div className="floors-container">
        {floors?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => onclickFloor(item?.floor)}
              className={
                activeFloor === item?.floor
                  ? "floor-card floor-card-active"
                  : "floor-card"
              }
            >
              {item?.name}
            </div>
          );
        })}
      </div>
      <div className="floor-details-container"></div>
      <div className="btn-submit-fixed">
        <SubmitButton onClick={onClickFloorDetails} buttonTitle="Save" />
      </div>
      <div onClick={onClickAddRoom} className="add-btn">
        <PlusOutlined className="plus-icon" />
      </div>
      <Modal
        title="New Room Details"
        open={addRoomModal}
        onCancel={() => {
          setAddRoomModal(false);
        }}
        centered={true}
        footer={false}
        className="add-prop-modal"
      >
        <Form name="form_item_path" layout="vertical" onFinish={() => {}}>
          <MyFormItemGroup prefix={["roomType"]}>
            <MyFormItem name="roomName" label="Room Name">
              <Input placeholder="Room Name" />
            </MyFormItem>
            <MyFormItem name="roomType" label="Room Type">
              <Select placeholder="Select Room Type">
                <Option value="SingleRoom">Single Room</Option>
                <Option value="Hall">Hall</Option>
                <Option value="1RK">1RK</Option>
                <Option value="1BHK">1BHK</Option>
                <Option value="2BHK">2BHK</Option>
                <Option value="3BHK">3BHK</Option>
              </Select>
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

export default AddRoomsToFloor;
