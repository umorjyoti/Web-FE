import React from "react";
import { getUserJWT } from "../utils";
import PrivateLayout from "./PrivateLayout";
import UnauthorizedLayout from "./UnAuthorizedLayout";

const Navigation = () => {
  const userJWT = getUserJWT();
  return <>{userJWT ? <PrivateLayout /> : <UnauthorizedLayout />}</>;
};

export default Navigation;
