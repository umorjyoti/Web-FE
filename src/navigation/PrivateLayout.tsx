import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("../screens/dashboard/index"));
const AddPropertyDetails = lazy(
  () => import("../screens/addProperty/AddPropertyDetails")
);
const AddRoomType = lazy(() => import("../screens/addProperty/AddRoomType"));

const PrivateLayout = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <Suspense fallback={<>Loading...</>}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        path="/add_property_details"
        element={
          <Suspense fallback={<>Loading...</>}>
            <AddPropertyDetails />
          </Suspense>
        }
      />
      <Route
        path="/add_property_details/add_room_type"
        element={
          <Suspense fallback={<>Loading...</>}>
            <AddRoomType />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default PrivateLayout;
