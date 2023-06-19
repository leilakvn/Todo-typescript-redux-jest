import React from "react";

import "./App.css";
import { Header } from "./componenets/Header";
import TodoForm from "./componenets/TodoForm";
import Todos from "./componenets/Todos";

function App() {
  return <div className="App">
    <Header/>
    <TodoForm/>
    <Todos/>
  </div>;
}

export default App;
