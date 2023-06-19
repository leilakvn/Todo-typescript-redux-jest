import React, { FormEvent, useState } from "react";
import { todoActions } from "../redux/slices/TodoSlice";
import {  useAppDispatch } from "../hooks"; //for typescript

const TodoForm = () => {
  const [task, setTask] = useState("");
  const handelChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLInputElement>
  ) => {
    setTask(e.target.value);
  };
  const dispatch = useAppDispatch();
  
  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(todoActions.addTodo(task));
    setTask("");
  };
  return (
    <form className="w-50  mx-auto"  onSubmit={handelSubmit}>
      <input
        className=" w-100 border-bottom  pb-2 border-2 h5 border-0"
        type="text"
        placeholder="Enter new todo..."
        value={task}
        onChange={handelChange}
      />
    </form>
  );
};

export default TodoForm;
