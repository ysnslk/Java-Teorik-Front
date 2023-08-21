import React, { useContext } from "react";
import UserContext from "../context/UserContext/UserContext";

const UserTable = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {user.map((userValue, index) => {
            return (
              <tr key={index}>
                <td>{userValue.name}</td>
                <td>{userValue.surname}</td>
                <td>{userValue.createdDate}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
