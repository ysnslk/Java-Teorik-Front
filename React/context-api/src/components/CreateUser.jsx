import React, { useContext } from "react";
import UserContext from "../context/UserContext/UserContext";

const CreateUser = () => {
  const { setUser } = useContext(UserContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      createdDate: e.target.createdDate.value,
    };
    
    setUser((prevState) => [...prevState, newUser]);
    console.log(newUser);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="surname" placeholder="Surname" />
      <input type="date" name="createdDate" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateUser;
