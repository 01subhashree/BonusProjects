import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "questionSlice",
  initialState: {
    data: [],
  },
  reducers: {
    addData: (state, action) => {
      const x = action.payload;
      const newX = x.map((ele) => {
        let random = Math.floor(Math.random() * 4);
        const obj = {
          question: ele.question,
          correct_answer: ele.correct_answer,
          options: ele.incorrect_answers,
        };
        obj.options.splice(random, 0, ele.correct_answer);
        return obj;
      });
      state.data = [...newX];
    },
    addQuestion: (state, action) => {
      state.data.push(action.payload);
      console.log(action.payload);
      const d = [...state.data];
      console.log(d);
    },
  },
});

export const { addData, addQuestion } = questionSlice.actions;
export default questionSlice.reducer;
