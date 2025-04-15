import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import authSlice from './slice/auth/authSlice';

const appReducer = combineReducers({
  auth: authSlice,
});

const rootReducer = (state: any, action: any) => {
  // if (action.type === authLogout.type) {
  //   state = undefined;
  // }

  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
