import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Teacher() {
  const [teachers, setTeachers] = useState([]);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      setLoading(true);
      let detail = await axios.get(
        "https://634ac2b15df95285141826d3.mockapi.io/demoapi/teachers"
      );
      console.log(detail.data);
      setTeachers(detail.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Error");
    }
  };

  const deleteData = async (userid) => {
    if (window.confirm("Are you sure to delete this user?")) {
      setLoading(true);
      await axios.delete(
        `https://634ac2b15df95285141826d3.mockapi.io/demoapi/teachers/${userid}`
      );
      fetchData();
      setLoading(false);
    }
    else
{
  setLoading(false);
  alert("Something Went Wrong");
}
  };
  return (
    <main>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Teachers</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>

        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            Teacher Details
            <Link
              to={"/portal/teachers_create"}
              type="button"
              className="btn btn-primary ms-5"
            >
              Create
            </Link>
          </div>
          <div className="card-body">
            {isloading ? (
              <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">TEACHER ID</th>
                    <th scope="col">DEPT.</th>
                    <th scope="col">JOINING DATE</th>
                    <th scope="col">GENDER</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">PHONE NO.</th>
                    <th scope="col">ACTIVE</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((teacher) => {
                    return (
                      <tr>
                        <th scope="row">{teacher.id}</th>
                        <td>{teacher.name}</td>
                        <td>{teacher.teacherId}</td>
                        <td>{teacher.dept}</td>
                        <td>{teacher.joiningdate}</td>
                        <td>{teacher.gender}</td>
                        <td>{teacher.email}</td>
                        <td>{teacher.phone}</td>
                        <td>
                          <Link
                            type="button"
                            to={`/portal/teachers_profile/${teacher.id}`}
                            className="btn btn-outline-secondary me-1"
                          >
                            View
                          </Link>
                          <Link
                            type="button"
                            to={`/portal/teachers_edit/${teacher.id}`}
                            className="btn btn-outline-primary me-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => {
                              deleteData(teacher.id);
                            }}
                            type="button"
                            className="btn btn-outline-danger my-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Teacher;
