import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SignUp = lazy(() => import("../screens/signUp/SignUp"));
const OTPVerification = lazy(() => import("../screens/signUp/OPTVerification"));

const UnauthorizedLayout = () => {
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
            <OTPVerification />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default UnauthorizedLayout;
