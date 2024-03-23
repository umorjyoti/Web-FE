import { configureStore } from "@reduxjs/toolkit";
import { login_details } from "../reducers/login";
import rootReducer from "./rootStore";


const store :any= configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;