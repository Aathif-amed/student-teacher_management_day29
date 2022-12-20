import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Students() {
  const [students, setStudents] = useState([]);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [setStudents]);

  let fetchData = async () => {
    try {
      setLoading(true);
      let detail = await axios.get(
        "https://634ac2b15df95285141826d3.mockapi.io/demoapi/students"
      );
      console.log(detail.data);
      setStudents(detail.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Something Went Wrong");
    }
  };

  const deleteData = async (userid) => {
    if (window.confirm("Are you sure to delete this user?")) {
      setLoading(true);
      await axios.delete(
        `https://634ac2b15df95285141826d3.mockapi.io/demoapi/students/${userid}`
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
        <h1 className="mt-4">Students</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>

        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            Student Details
            <Link
              to={"/portal/students_create"}
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
                    <th scope="col">ADMISSION NO.</th>
                    <th scope="col">STUDENT NAME</th>
                    <th scope="col">className</th>
                    <th scope="col">FATHER NAME</th>
                    <th scope="col">DOB</th>
                    <th scope="col">GENDER</th>
                    <th scope="col">PHONE NO.</th>
                    <th scope="col">ACTIVE</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => {
                    return (
                      <tr>
                        <th scope="row">{student.id}</th>
                        <td>{student.admissionNo}</td>
                        <td>{student.studentName}</td>
                        <td>{student.className}</td>
                        <td>{student.fatherName}</td>
                        <td>{student.dob}</td>
                        <td>{student.gender}</td>
                        <td>{student.phone}</td>
                        <td>
                          <Link
                            to={`/portal/students_profile/${student.id}`}
                            type="button"
                            className="btn btn-outline-secondary me-1"
                          >
                            View
                          </Link>
                          <Link
                            to={`/portal/students_edit/${student.id}`}
                            type="button"
                            className="btn btn-outline-primary me-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => {
                              deleteData(student.id);
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

export default Students;
