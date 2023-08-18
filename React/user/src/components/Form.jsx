import React from "react";
import axios from "axios";

const Form = ({onChange}) => {
  /**
   * npx json-server --watch db.json --port 5000 DB json server kodu
   * Form:
   * firstname,surname,gender(radio) ,age (number),isAdmin (select)
   * */

  const userSubmit = (data) => {
    data.preventDefault();
    const user = {
      firstName: data.target.fName.value,
      surName: data.target.sName.value,
      gender: data.target.gender.value,
      age: data.target.age.value,
      isAdmin: data.target.isAdmin.value,
    };
    axios.post("http://localhost:5000/users", user).then((res) => {
      console.log(res.data);
      onChange(res.data.id);
    });
  };

  return (
    <form className="userForm" onSubmit={userSubmit}>
      <label>
        First Name :
        <input type="text" name="fName" placeholder="First Name" />
      </label>
      <label>
        Surname :
        <input type="text" name="sName" placeholder="Surname" />
      </label>
      <label>
        <input type="radio" name="gender" value="male"/>
        Male
      </label>
      <label>
        <input type="radio" name="gender" value="female"/>
        Female
      </label>
      <label>
        Age :
        <input type="number" name="age" />
      </label>
      <label>
        IsAdmin ? :
        <select name="isAdmin">
          <option value="X">Yes</option>
          <option value="O">No</option>
        </select>
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
