import { configureStore } from "@reduxjs/toolkit";

import messageReducer from "./lib/slices/messageSlice";
import heroReducer from "./lib/slices/heroSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    message: messageReducer,
    hero: heroReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
