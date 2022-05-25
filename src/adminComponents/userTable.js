import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/features/usersSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";

function UsersTable() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.users);
  const { usersList } = useSelector((state) => state.users.users);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  useEffect(() => {
    let res = dispatch(getUsers());
  }, []);
  console.log(usersList, loading);
  if (!loading && usersList) {
    return (
      <div
        style={{
          margin: "4em 2em 0em 2em",
        }}
      >
        <h1>Users Table</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Last Nale</th>
              <th>Email</th>
              <th>tel</th>
              <th>Role</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user) => (
              <tr key={user.id}>
                <td>
                  {
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                      src={user.picture}
                      alt=""
                    />
                  }
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.tel}</td>
                <td>{user.role}</td>
                <td>{moment(user.createdAt).format("DD/MM/YYYY")}</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UsersTable;
