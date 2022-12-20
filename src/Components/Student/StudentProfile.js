import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function StudentProfile() {
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
      console.log(error);
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
      <h1 className="mt-4 mb-4">
        Student Profile of {formik.values.studentName}
      </h1>
      <form>
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
                disabled
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
                disabled
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
                disabled
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
                disabled
              />
            </div>
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              Gender<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              id="inputState"
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
              className="form-control"
              disabled
            />
          </div>
          <div className="col-md-4">
            <label for="inputClass" className="form-label">
              Class <span style={{ color: "red" }}>*</span>:
            </label>
            <input
              id="inputClass"
              name="className"
              onChange={formik.handleChange}
              value={formik.values.className}
              className="form-control"
              disabled
            />
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
                disabled
              />
            </div>
          </div>
          <div className="col-lg-6">
            <Link
              to={`/portal/students_edit/${id}`}
              type="button"
              className="btn btn-outline-primary me-1"
            >
              Edit
            </Link>
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

export default StudentProfile;
