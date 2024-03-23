import { FormItemProps, Input, Modal, Form, Select } from "antd";
import React, { useState } from "react";
import "./index.css";
import SubmitButton from "../../components/buttons/submitButton";
import { useNavigate } from "react-router-dom";
import AddPropertyHeader from "../../components/header/AddPropertyHeader";

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

const Dashboard = () => {
  const [showAddPropertyModel, setShowAddPropertyModel] = useState(false);
  const navigate = useNavigate();

  const onClickAddProperty = () => {
    setShowAddPropertyModel(true);
  };
  const onClickCloseAddPropertyModal = () => {
    setShowAddPropertyModel(false);
  };
  const onFinish = (value: object) => {
    console.log(value);
  };

  const onClickAddPropertyBtn = () => {
    navigate("add_property_details");
  };

  return (
    <>
      <AddPropertyHeader title={"Sai Omes"} />
      <div className="dashoard-main-container">
        <div className="financial-data-container"></div>
        <button onClick={onClickAddProperty}>Add New Property</button>
        <Modal
          title="Add New Property"
          open={showAddPropertyModel}
          onCancel={onClickCloseAddPropertyModal}
          centered={true}
          footer={false}
          className="add-prop-modal"
        >
          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <MyFormItemGroup prefix={["user"]}>
              <MyFormItem name="property_name" label="Property/Company Name">
                <Input placeholder="Property Name" />
              </MyFormItem>
              <MyFormItem name="property_manager" label="Property Manager">
                <Input placeholder="Property Manager's phone number" />
              </MyFormItem>
              <MyFormItem name="manager_phone" label="Manager's Phone No">
                <Input placeholder="Manager's phone no" />
              </MyFormItem>
              <MyFormItem name="property_type" label="Property Type">
                <Select placeholder="Select Room Type">
                  <Option value="Room">Room</Option>
                  <Option value="PG">PG</Option>
                  <Option value="Flat">Flat</Option>
                  <Option value="Stand Alone">Stand Alone</Option>
                  <Option value="Hostel">Hostel</Option>
                  <Option value="Hotel">Hotel</Option>
                </Select>
              </MyFormItem>
            </MyFormItemGroup>

            <SubmitButton
              buttonTitle="Add Property"
              onClick={onClickAddPropertyBtn}
            />
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default Dashboard;
