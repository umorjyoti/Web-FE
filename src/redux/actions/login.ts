import { createAsyncThunk } from "@reduxjs/toolkit";
import loginApi from "../services/login";

export const getOTP = createAsyncThunk(
    "getOTP",
    async ( args:any,{rejectWithValue,dispatch})=>{
        const url= "dfsgvdsa";
        const response = await loginApi.post(url,"some data");
        return response.data;
    }
)