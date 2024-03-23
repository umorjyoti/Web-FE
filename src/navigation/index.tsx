import React, { useEffect, useState } from "react";
import { getUserJWT } from "../utils";
import PrivateLayout from "./PrivateLayout";
import UnauthorizedLayout from "./UnAuthorizedLayout";

const Navigation = () => {
  const [jwtToken, setJWTToken] = useState(getUserJWT());

  useEffect(() => {
    setJWTToken(getUserJWT());
  }, [getUserJWT()]);

  return <>{jwtToken ? <PrivateLayout /> : <UnauthorizedLayout />}</>;
};

export default Navigation;
