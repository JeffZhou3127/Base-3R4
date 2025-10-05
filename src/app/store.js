import { configureStore } from "@reduxjs/toolkit";
import problemsReducer from "../features/ourDesign/problemsSlice";

const store = configureStore({
  reducer: {
    problems: problemsReducer,
  },
});

export default store;
