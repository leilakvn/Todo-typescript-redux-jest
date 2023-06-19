import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { todoActions } from "../redux/slices/TodoSlice";
import { TodoType } from "./../model/Todo";
import { FaTrash, FaEdit } from "react-icons/fa";
interface TodoProps {
  todo: TodoType;
}
export const Todo: React.FC<TodoProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
 
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(todo?.text);
  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(todoActions.updateTodo({id:todo.id,text:text,done:todo.done}))
    setEditMode(false);
  };

  return (
    <div
      className="mt-3 p-3 rounded h6 bg-dark bg-gradient text-light d-flex justify-content-between"
      onClick={() => dispatch(todoActions.toggleTodo(todo.id))}
    >
      <span
        style={{
          textDecoration: todo?.done ? "line-through" : "",
          color: todo?.done ? "#bdc3c7" : "",
        }}
        data-testid="todo-test"
      >
        <span style={{ display: editMode ? "none" : "inline" }}>
          {todo?.text}
        </span>
        <form
          style={{ display: editMode ? "inline" : "none" }}
          onSubmit={handelSubmit}
        >
          <input
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
          ></input>
        </form>
      </span>
      <span className="d-flex gap-3">
        <FaEdit onClick={() => setEditMode((prevState) => !prevState)} />
        <FaTrash onClick={() => dispatch(todoActions.deleteTodo(todo.id))} />
      </span>
    </div>
  );
};
