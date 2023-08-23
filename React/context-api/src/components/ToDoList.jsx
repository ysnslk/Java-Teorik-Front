import React, { useContext } from "react";
import ToDoContext from "../context/ToDoContext/ToDoContext";

function generateGuid() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

const ToDoList = () => {
  const { toDos } = useContext(ToDoContext);
  // console.log(generateGuid());
  return (
    <ul>
      {toDos.map((toDo) => (
        <li key={generateGuid()}>{toDo}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
