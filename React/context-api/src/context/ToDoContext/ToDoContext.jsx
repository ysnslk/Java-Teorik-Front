import React, { useReducer, createContext } from "react";
import reducer from "../../reducer/ToDoReducer";

const ToDoContext = createContext();

function ToDoProvider({ children }) {
  const [toDos, dispatch] = useReducer(reducer, []);
  return (
    <ToDoContext.Provider value={{ toDos, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
}

export default ToDoContext;
export { ToDoProvider };
