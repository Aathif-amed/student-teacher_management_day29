import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function StudentEdit() {
  const navigate =useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetchdata();
  }, []);
  const [loading, setLoading] = useState(false);

  const fetchdata = async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        `https://634ac2b15df95285141826d3.mockapi.io/demoapi/students/${id}`
      );
      formik.setValues(data.data);
      console.log(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Something Went Wrong");
    }
  };
  const formik = useFormik({
    initialValues: {
      studentName: "",
      admissionNo: "",
      className: "",
      dob: "",
      fatherName: "",
      gender: "",
      phone: "",
    },
    validate: (values) => {
      let error = {};

      if (!values.studentName) {
        error.studentName = "*Required";
      } else if (
        values.studentName.length < 3 ||
        values.studentName.length > 15
      ) {
        error.studentName = "Character must between 3 to 15";
      }

      if (!values.admissionNo) {
        error.admissionNo = "*Required";
      } else if (
        values.admissionNo.toString().length < 4 ||
        values.admissionNo.toString().length > 5
      ) {
        error.admissionNo = "Number must be 4 or 5 digits";
      }

      if (!values.className) {
        error.className = "*Required";
      }

      if (!values.dob) {
        error.dob = "*Required";
      }

      if (!values.fatherName) {
        error.fatherName = "*Required";
      } else if (
        values.fatherName.length < 3 ||
        values.fatherName.length > 15
      ) {
        error.fatherName = "Character must between 3 to 15";
      }

      if (!values.gender) {
        error.gender = "*Required";
      }

      if (!values.phone) {
        error.phone = "*Required";
      } else if (values.phone.toString().length !== 10) {
        error.phone = "Invalid Mobile No.";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        let studentdata = await axios.put(
          `https://634ac2b15df95285141826d3.mockapi.io/demoapi/students/${id}`,
          values
        );
        alert("Student Data Added Successfully !!");
        navigate("/portal/students_data")
      } catch (error) {
        alert("Error, Please Check it!!");
      }
    },
  });
  return loading ? (
    <>
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    </>
  ) : (
    <div className="container-fluid px-4">
      <h1 className="mt-4 mb-4">Edit Details of {formik.values.studentName}</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label for="formGroupExampleStudent" className="form-label">
                Student Name<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="text"
                name="studentName"
                onChange={formik.handleChange}
                value={formik.values.studentName}
                className="form-control"
                id="formGroupExampleStudent"
                placeholder="Student Name"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label for="formGroupExampleFather" className="form-label">
                Father Name<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="text"
                name="fatherName"
                onChange={formik.handleChange}
                value={formik.values.fatherName}
                className="form-control"
                id="formGroupExampleFather"
                placeholder="Father Name"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="formGroupExampleAdmission" className="form-label">
                Admission No<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="number"
                name="admissionNo"
                onChange={formik.handleChange}
                value={formik.values.admissionNo}
                className="form-control"
                id="formGroupExampleAdmission"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="formGroupExampleDOB" className="form-label">
                DOB<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="date"
                name="dob"
                onChange={formik.handleChange}
                value={formik.values.dob}
                className="form-control"
                id="formGroupExampleDOB"
              />
            </div>
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              Gender<span style={{ color: "red" }}>*</span>:
            </label>
            <select
              id="inputState"
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
              className="form-select"
            >
              <option selected>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="col-md-4">
            <label for="inputClass" className="form-label">
            Class<span style={{ color: "red" }}>*</span>:
            </label>
            <select
              id="inputClass"
              name="className"
              onChange={formik.handleChange}
              value={formik.values.className}
              className="form-select"
            >
              <option selected>Choose...</option>
              <option>10A</option>
              <option>10B</option>
              <option>10C</option>
              <option>12A</option>
              <option>12B</option>
              <option>12C</option>
            </select>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="formGroupExamplePhone" className="form-label">
                Phone No<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="number"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className="form-control"
                id="formGroupExamplePhone"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link
              to={"/portal/students_data"}
              type="button"
              className="btn btn-secondary ms-2"
            >
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StudentEdit;
