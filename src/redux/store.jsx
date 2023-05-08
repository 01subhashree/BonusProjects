import { configureStore } from "@reduxjs/toolkit";
import QuestionReducer from "./createSlicer";

const Store = configureStore({
  reducer: {
    questions: QuestionReducer,
  },
});

export default Store;
