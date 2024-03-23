import { createAsyncThunk } from "@reduxjs/toolkit";
import loginApi from "../services/login";

export const postPhoneNo = createAsyncThunk(
    "postPhoneNo",
    async ( args:any)=>{
        const url= "https://ragalia.onrender.com/api/auth/register";
        const response = await loginApi.post(url,{phone:args});
        return response.data;
    }
)

export const verifyOTP = createAsyncThunk(
    "verifyOTP",
    async ( args:any)=>{
        const url= "https://ragalia.onrender.com/api/auth/verify";
        const response = await loginApi.post(url,{
            otp:"23435",
            userId:"65feb4442795437f067d53cb"
        });
        return response.data;
    }
)

// {otp:args?.otp,
//     userID:args?.userId}