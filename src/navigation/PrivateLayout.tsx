import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("../screens/dashboard/index"));
const AddPropertyDetails = lazy(
  () => import("../screens/addProperty/AddPropertyDetails")
);
const AddRoomType = lazy(() => import("../screens/addProperty/AddRoomType"));
const AddRoomsToFloor = lazy(
  () => import("../screens/addProperty/AddRoomsToFloor")
);

const PrivateLayout = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        path="/dashboard/add_property_details"
        element={
          <Suspense fallback={<>Loading...</>}>
            <AddPropertyDetails />
          </Suspense>
        }
      />
      <Route
        path="/dashboard/add_property_details/add_room_type"
        element={
          <Suspense fallback={<>Loading...</>}>
            <AddRoomType />
          </Suspense>
        }
      />
      <Route
        path="/dashboard/add_property_details/add_room_type/add_rooms_to_floor"
        element={
          <Suspense fallback={<>Loading...</>}>
            <AddRoomsToFloor />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default PrivateLayout;
