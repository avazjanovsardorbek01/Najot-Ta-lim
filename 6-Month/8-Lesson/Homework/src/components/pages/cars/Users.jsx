import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/users").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  }, []);
  return (
    <div className="users">
      <h1 className="text-start my-3">Users</h1>
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Password</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.name.firstname}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.address.city}</td>
              <td>{item.password}</td>
              <td>{item.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
