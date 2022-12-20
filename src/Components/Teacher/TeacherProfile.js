import axios from "axios";
import { useFormik } from "formik";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function TeacherProfile() {
  const { id } = useParams();
  useEffect(() => {
    fetchdata();
  }, []);
  const [loading, setLoading] = useState(false);

  const fetchdata = async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        `https://634ac2b15df95285141826d3.mockapi.io/demoapi/teachers/${id}`
      );
      formik.setValues(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Something Went Wrong");
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      dept: "",
      email: "",
      gender: "",
      joiningdate: "",
      phone: "",
      teacherId: "",
    },
  });
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4 mb-4">Teacher - Data Creation Form</h1>
      <form>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Teacher Name:
              </label>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Teacher Name"
                disabled
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email:
              </label>
              <input
                name="email"
                value={formik.values.email}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
                disabled
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Teacher ID:
              </label>
              <input
                name="teacherId"
                value={formik.values.teacherId}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                disabled
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Joining Date:
              </label>
              <input
                name="joiningdate"
                value={formik.values.joiningdate}
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                disabled
              />
            </div>
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              Gender:
            </label>
            <input
              name="gender"
              value={formik.values.gender}
              id="inputState"
              disabled
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label for="inputClass" className="form-label">
              Department:
            </label>
            <input
              name="dept"
              value={formik.values.dept}
              id="inputClass"
              className="form-control"
              disabled
            />
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Phone No:
              </label>
              <input
                name="phone"
                value={formik.values.phone}
                type="number"
                disabled
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <Link
              type="button"
              to={`/portal/teachers_edit/${id}`}
              className="btn btn-outline-primary me-1"
            >
              Edit
            </Link>
            <Link
              to={"/portal/teachers_data"}
              type="button"
              className="btn btn-secondary ms-2 mt-1"
            >
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TeacherProfile;
