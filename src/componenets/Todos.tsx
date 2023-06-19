import React from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { Todo } from "./Todo";
import Tabs from "./Tabs";
import { TodoType } from "../model/Todo";
import { todoActions } from "../redux/slices/TodoSlice";

const Todos = () => {
  const todos = useAppSelector((state) => state.Todo.todoList);
  const tab = useAppSelector((state) => state.Tab.activeTab);
  const dispatch = useAppDispatch();

  const getTodos = (): TodoType[] | undefined => {
    if (tab === "All") return todos;
    if (tab === "Active") return todos.filter((todo) => !todo.done);
    if (tab === "Done") return todos.filter((todo) => todo.done);
  };
  const removeDoneTodos = () => {
    todos.forEach(({ done, id }) => {
      if (done) {
        dispatch(todoActions.deleteTodo(id));
      }
    });
  };
  return (
    <div className="w-50  mx-auto">
      <div className="d-flex justify-content-between">
        <Tabs currentTab={tab}></Tabs>
        <button
          className="bg-danger border-0 p-1 rounded-2 text-white"
          onClick={removeDoneTodos}
          style={{ display: getTodos()?.length !== 0 ? "inline" : "none" }}
        >
          Remove Done Todos
        </button>
      </div>
      {getTodos()?.map((item, index) => (
        <Todo todo={item} key={index} />
      ))}
    </div>
  );
};

export default Todos;
