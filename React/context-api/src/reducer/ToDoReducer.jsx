export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

const reducer = (toDos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...toDos, action.toDo];
    case REMOVE_TODO:
      return toDos.slice(0, -1);
    default:
      return toDos;
  }
};
export default reducer;
