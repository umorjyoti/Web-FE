import { createSlice } from "@reduxjs/toolkit";
import { postPhoneNo } from "../actions/login";

type login = {
    phoneNo:number;
    otpData:any;
loading:any;
error:any,
userInfo:any;
}

const initialState:login={
    phoneNo :0,
    otpData:null,
    loading:false,
    error:false,
    userInfo:{},
}

export const login_details : any = createSlice({
    name:"login_details",
    initialState,
    reducers:{
        savePhoneAndUserID(state, action) {
            state.userInfo = action?.payload?.data;
          },
    },
    extraReducers:(builder)=> {
        builder
      .addCase(postPhoneNo.pending, (state) => {
        state.loading = true;
      })
      .addCase(postPhoneNo.fulfilled, (state, action) => {
        console.log("coming in here")
        state.loading = false;
        state.otpData = action.payload;
        console.log("dataa",state.otpData)
      })
      .addCase(postPhoneNo.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
    
})

export default login_details.reducer;

export const { savePhoneAndUserID} = login_details.actions;