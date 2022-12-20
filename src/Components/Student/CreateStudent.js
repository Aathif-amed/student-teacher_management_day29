import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Createstudent() {
  const navigate =useNavigate();

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
        let studentdata = await axios.post(
          "https://634ac2b15df95285141826d3.mockapi.io/demoapi/students",
          values
        );
        console.log(studentdata);
        alert("Student Data Added Successfully !!");
        navigate("/portal/students_data")

      } catch (error) {
        alert("Error, Please Check it!!");
      }
    },
  });
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4 mb-4">Student Creation Form</h1>
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
                onBlur={formik.handleBlur}
                value={formik.values.studentName}
                className={`form-control ${
                  formik.errors.studentName ? "error-box" : ""
                } ${
                  formik.touched.studentName && !formik.errors.studentName
                    ? "success-box"
                    : ""
                }`}
                id="formGroupExampleStudent"
                placeholder="Student Name"
              />
              {formik.errors.studentName ? (
                <span style={{ color: "red" }}>
                  {formik.errors.studentName}
                </span>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.fatherName}
                className={`form-control ${
                  formik.errors.fatherName ? "error-box" : ""
                } ${
                  formik.touched.fatherName && !formik.errors.fatherName
                    ? "success-box"
                    : ""
                }`}
                id="formGroupExampleFather"
                placeholder="Father Name"
              />
              {formik.errors.fatherName ? (
                <span style={{ color: "red" }}>{formik.errors.fatherName}</span>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.admissionNo}
                className={`form-control ${
                  formik.errors.admissionNo ? "error-box" : ""
                } ${
                  formik.touched.admissionNo && !formik.errors.admissionNo
                    ? "success-box"
                    : ""
                }`}
                id="formGroupExampleAdmission"
              />
              {formik.errors.admissionNo ? (
                <span style={{ color: "red" }}>
                  {formik.errors.admissionNo}
                </span>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                className="form-control"
                id="formGroupExampleDOB"
              />
              {formik.errors.dob ? (
                <span style={{ color: "red" }}>{formik.errors.dob}</span>
              ) : null}
            </div>
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              Gender<span style={{ color: "red" }}>*</span>:
            </label>
            <select
              name="gender"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
              id="inputState"
              className="form-select"
            >
              <option selected>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            {formik.errors.gender ? (
              <span style={{ color: "red" }}>{formik.errors.gender}</span>
            ) : null}
          </div>
          <div className="col-md-4">
            <label for="inputClass" className="form-label">
              Class<span style={{ color: "red" }}>*</span>:
            </label>
            <select
              id="inputClass"
              name="className"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
            {formik.errors.className ? (
              <span style={{ color: "red" }}>{formik.errors.className}</span>
            ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className={`form-control ${
                  formik.errors.phone ? "error-box" : ""
                } ${
                  formik.touched.phone && !formik.errors.phone
                    ? "success-box"
                    : ""
                }`}
                id="formGroupExamplePhone"
              />
              {formik.errors.phone ? (
                <span style={{ color: "red" }}>{formik.errors.phone}</span>
              ) : null}
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

export default Createstudent;