import React, { useEffect, useState } from "react";
import { getUserJWT } from "../utils";
import PrivateLayout from "./PrivateLayout";
import UnauthorizedLayout from "./UnAuthorizedLayout";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [jwtToken, setJWTToken] = useState(getUserJWT());
  const navigate = useNavigate();

  useEffect(() => {
    setJWTToken(getUserJWT());
    if(jwtToken) navigate("/dashboard");
  }, [jwtToken]);

  if(jwtToken){
    return <PrivateLayout /> 
  }

  return <UnauthorizedLayout setToken={setJWTToken} />;
};

export default Navigation;
