import React, { useContext } from "react";
import ToDoContext from "../context/ToDoContext/ToDoContext";
import { ADD_TODO, REMOVE_TODO } from "../reducer/ToDoReducer";

const CreateToDo = () => {
  const { dispatch } = useContext(ToDoContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const toDo = e.target.toDo.value;
    dispatch({ type: ADD_TODO, toDo: toDo });
    e.target.toDo.value = "";
  };
const onClick = () =>{
    dispatch({type: REMOVE_TODO});
}
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="toDo" required />
      <button type="submit">Ekle</button>
      <button onClick={onClick}>Sil</button>
    </form>
  );
};

export default CreateToDo;
