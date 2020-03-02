import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { withRouter } from "react-router-dom";

const LoginForm = ({}) => {
  const [person, setPerson] = useState([]);

  return (
    <div className="container">
      <Form>
        <label htmlFor="email">Email: </label>
        <Field name="email" type="email" />
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}
        <br />
        <label htmlFor="password">Password: </label>
        <Field name="password" type="password" />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <button type="submit">SUBMIT</button>
      </Form>
    </div>
  );
};

const FormikForms = withRouter(
  withFormik({
    mapPropsToValues({ email, password }) {
      return {
        email: email || "",
        password: password || ""
      };
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("email is required!"),
      password: Yup.string().required("password is required!")
    }),
    handleSubmit(values, { props }) {
      axiosWithAuth()
        .post("login", values)
        .then(response => {
          console.log("success", response);
          window.localStorage.setItem("token", response.data.payload);
          //props.history.replace();
        })
        .catch(err => console.log(err.response));
    }
  })(LoginForm)
);
export default FormikForms;
