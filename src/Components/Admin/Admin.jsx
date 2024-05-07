import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar';
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from 'sweetalert2';
import MovingComponent from "react-moving-text";

const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/allUser")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, [users]); 
    
    const handleMakeApprove = (user) => {
      fetch(`http://localhost:5000/users/approve/${user._id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {            
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is approve Now!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    };
    const handleMakeDenied = (user) => {
      fetch(`http://localhost:5000/users/denied/${user._id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is denied Now!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    };
    return (
      <div>
        <NavBar />
        <MovingComponent
          type="fadeInFromLeft"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
          className="tracking-wider text-bold text-white mt-28 mx-10 bg-gray-800 rounded inline-block px-3 py-1"
        >
          Manage User
        </MovingComponent>
        <h3 className="text-2xl font-semibold my-4 text-center tracking-widest text-gray-700 ">
          Total Users: {users.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table border table-zebra w-11/12 mx-auto">
            {/* head */}
            <thead>
              <tr className="my-color1">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    {user.approval === "denied" ? (
                      <div className="my-text font-semibold text-red-500">
                        Denied
                      </div>
                    ) : (
                      <button
                        onClick={() => handleMakeDenied(user)}
                        className="btn btn-sm bg-red-600  text-white"
                      >
                        <FaUserShield></FaUserShield>
                        Account Denied
                      </button>
                    )}
                  </td>
                  <td>
                    {user.approval === "approve" ? (
                      <div className="my-text font-semibold text-green-500">
                        Approval
                      </div>
                    ) : (
                      <button
                        onClick={() => handleMakeApprove(user)}
                        className="btn btn-sm bg-green-600  text-white"
                      >
                        <FaUserShield></FaUserShield>
                        Account Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Admin;