import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Table = ({ newUserId }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let unMounted = false;
    const token = axios.CancelToken.source();
    axios.get("http://localhost:5000/users").then((res) => {
      if (!unMounted) {
        setUsers(res.data);
      }
      return () => {
        unMounted = true;
        token.cancel();
      };
    });
  }, [newUserId]);
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Admin</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.firstName} {user.surName}
              </td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>{user.isAdmin}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
