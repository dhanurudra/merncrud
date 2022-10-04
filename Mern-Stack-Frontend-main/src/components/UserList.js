import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:7000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Link to="add" className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>SlNo</th>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Google link</th>
              <th>Linkedin link</th>
              <th>FaceBook link</th>
              <th>Instagram link</th>
              <th>Youtube link</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Added On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.desc}</td>
                <td>{user.img}</td>
                <td>{user.glink}</td>
                <td>{user.llink}</td>
                <td>{user.flink}</td>
                <td>{user.ilink}</td>
                <td>{user.ylink}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{new Date().toLocaleString()}</td>

                <td>
                  <Link
                    to={`edit/${user._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
