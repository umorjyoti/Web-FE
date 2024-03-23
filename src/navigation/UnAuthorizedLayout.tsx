import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SignUp = lazy(() => import("../screens/signUp/SignUp"));
const OTPVerification = lazy(() => import("../screens/signUp/OPTVerification"));

const UnauthorizedLayout = (props:any) => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <Suspense fallback={<>Loading...</>}>
            <SignUp />
          </Suspense>
        }
      />
      <Route
        path="/otp_verification"
        element={
          <Suspense fallback={<>Loading...</>}>
            <OTPVerification setJWT={props?.setToken} />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default UnauthorizedLayout;
