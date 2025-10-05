import { configureStore } from "@reduxjs/toolkit";
import problemsReducer from "../features/ourDesign/problemsSlice";
import solutionsReducer from "../views/solutions/solutionsSlice";

const store = configureStore({
  reducer: {
    problems: problemsReducer,
    solutions: solutionsReducer,
  },
});

export default store;
