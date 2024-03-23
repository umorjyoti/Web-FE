import { configureStore } from "@reduxjs/toolkit";
import { login_details } from "../reducers/login";

const store = configureStore({
    reducer:{
        login_details:login_details
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;