import { configureStore } from "@reduxjs/toolkit";
import UserInfoSlice from "./UserInfoSlice"
import CartInfoSlice from "./CartInfoSlice";

const store = configureStore({
  reducer: {
    UserInfo: UserInfoSlice,
    CartInfo: CartInfoSlice,
  },
});

export default store;
