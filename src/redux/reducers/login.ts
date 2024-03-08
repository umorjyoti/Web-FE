import { createSlice } from "@reduxjs/toolkit";

type login = {
    phoneNo:number;
}

const initialState:login={
    phoneNo :0,
}

export const login_details : any = createSlice({
    name:"login_details",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        
    },
})

export default login_details.reducer;

export const {...props} = login_details.actions;