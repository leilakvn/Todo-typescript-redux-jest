import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { TodoType } from "../../model/Todo";
const initialState = { todoList: [] as TodoType[] };

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<TodoType>) => {
        state.todoList.push(action.payload);
        console.log(action.payload, current(state));
      },
      prepare: (text: string) => ({
        payload: {
          id: Date.now(),
          text,
          done: false,
        } as TodoType,
      }),
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      let newValue = state.todoList.map((item) => {
        var returnValue = { ...item };
        if (item.id === action.payload) {
          returnValue.done = !returnValue.done;
        }
        return returnValue;
      });
      console.log(newValue);
      state.todoList = newValue;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
      console.log(action.payload, current(state));
    },
    updateTodo: (state, action: PayloadAction<TodoType>) => {
      console.log("999",action.payload)
      state.todoList = state.todoList.map((item) => {
        return item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item;
      });
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
