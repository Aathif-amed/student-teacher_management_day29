import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function TeacherEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
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
    validate: (values) => {
      let error = {};

      if (!values.name) {
        error.name = "*Required";
      }
      if (values.name && (values.name.length < 3 || values.name.length > 15)) {
        error.name = "name must be 3 to 15 characters";
      }

      if (!values.dept) {
        error.dept = "*Required";
      }

      if (!values.email) {
        error.email = "*Required";
      } else if (
        !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(values.email)
      ) {
        error.email = "Invalid email address";
      }

      if (!values.gender) {
        error.gender = "*Required";
      }

      if (!values.joiningdate) {
        error.joiningdate = "*Required";
      }

      if (!values.phone) {
        error.phone = "*Required";
      } else if (values.phone.toString().length !== 10) {
        error.phone = "Invalid Phone number";
      }

      if (!values.teacherId) {
        error.teacherId = "*Required";
      }
      return error;
    },
    onSubmit: async (values) => {
      try {
        let teacherData = await axios.put(
          `https://634ac2b15df95285141826d3.mockapi.io/demoapi/teachers/${id}`,
          values
        );
        alert("Data Added Successfully!!");
        navigate("/portal/teachers_data")
      } catch (error) {
        alert("Error!! Data not Added");
      }
    },
  });
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4 mb-4">Teacher - Data Creation Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Teacher Name<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={`form-control ${formik.errors.name ? "error-box" : ""} ${
                  formik.touched.name && !formik.errors.name
                    ? "success-box"
                    : ""
                }`}
                id="exampleFormControlInput1"
                placeholder="Teacher Name"
              />
              {formik.touched.name && formik.errors.name ? (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="text"
                className={`form-control ${
                  formik.touched.email && formik.errors.email ? "error-box" : ""
                } ${
                  formik.touched.email && !formik.errors.email
                    ? "success-box"
                    : ""
                }`}
                id="exampleFormControlInput1"
                placeholder="Email"
              />
              {formik.touched.email && formik.errors.email ? (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Teacher ID<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                name="teacherId"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.teacherId}
                type="text"
                className={`form-control ${
                  formik.touched.email && formik.errors.teacherId
                    ? "error-box"
                    : ""
                } ${
                  formik.touched.teacherId && !formik.errors.teacherId
                    ? "success-box"
                    : ""
                }`}
                id="exampleFormControlInput1"
              />
              {formik.touched.teacherId && formik.errors.teacherId ? (
                <span style={{ color: "red" }}>{formik.errors.teacherId}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Joining Date<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                name="joiningdate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.joiningdate}
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
              />
              {formik.errors.joiningdate ? (
                <span style={{ color: "red" }}>
                  {formik.errors.joiningdate}
                </span>
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
              Department<span style={{ color: "red" }}>*</span>:
            </label>
            <select
              name="dept"
              onChange={formik.handleChange}
              value={formik.values.dept}
              id="inputClass"
              className="form-select"
            >
              <option selected>Choose...</option>
              <option>Tamil</option>
              <option>English</option>
              <option>Maths</option>
              <option>Science</option>
              <option>Socialscience</option>
            </select>
            {formik.errors.dept ? (
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            ) : null}
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Phone No<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type="number"
                className={`form-control ${
                  formik.touched.phone && formik.errors.phone ? "error-box" : ""
                } ${
                  formik.touched.phone && !formik.errors.phone
                    ? "success-box"
                    : ""
                }`}
                id="exampleFormControlInput1"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <span style={{ color: "red" }}>{formik.errors.phone}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <button type="submit" className="btn btn-primary mt-1">
              Submit
            </button>
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

export default TeacherEdit;