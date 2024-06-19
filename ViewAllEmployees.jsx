import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewAllEmployees = () => {
  const [allEmployee, setAllEmployee
  ] = useState([]);
  const admin_jwtToken = sessionStorage.getItem("admin-jwtToken");

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retrieveAllUser();
      if (allUsers) {
        setAllEmployee
        (allUsers.users);
      }
    };

    getAllUsers();
  }, []);

  const retrieveAllUser = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/user/fetch/role-wise?role=Employee",
      {
        headers: {
          Authorization: "Bearer " + admin_jwtToken, 
        },
      }
    );
    console.log(response.data);
    return response.data;
  };

  const formatDateFromEpoch = (epochTime) => {
    const date = new Date(Number(epochTime));
    const formattedDate = date.toLocaleString(); 

    return formattedDate;
  };

  return (
    <div className="mt-3">
      <div
        className="card form-card ms-2 me-2 mb-5 shadow-lg"
        style={{
          height: "45rem",
        }}
      >
        <div
          className="card-header custom-bg-text text-center bg-color"
          style={{
            borderRadius: "1em",
            height: "50px",
          }}
        >
          <h2> Candidates</h2>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table-hover text-color text-center">
              <thead className="table-bordered border-color bg-color custom-bg-text">
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email Id</th>
                  <th scope="col">Phone No</th>
                  <th scope="col">Address</th>
                  <th scope="col">Registration Date</th>
                </tr>
              </thead>
              <tbody>
                {allEmployee
                .map((Employee
                ) => {
                  return (
                    <tr>
                      <td>
                        <b>{Employee
                        .firstName}</b>
                      </td>
                      <td>
                        <b>{Employee
                        .lastName}</b>
                      </td>
                      <td>
                        <b>{Employee
                        .emailId}</b>
                      </td>
                      <td>
                        <b>{Employee
                        .phoneNo}</b>
                      </td>
                      <td>
                        <b>
                          {Employee
                          .address.street +
                            ", " +
                            Employee
                            .address.city +
                            ", " +
                            Employee
                            .address.pincode}
                        </b>
                      </td>
                      <td>
                        <b>{formatDateFromEpoch(Employee
                          .registrationDate)}</b>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllEmployees;
