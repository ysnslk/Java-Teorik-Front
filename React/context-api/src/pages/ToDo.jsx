import React from "react";
import CreateToDo from "../components/CreateToDo";
import ToDoList from "../components/ToDoList";

const ToDo = () => {
  return (
    <div>
      <CreateToDo />
      <ToDoList />
    </div>
  );
};

export default ToDo;
