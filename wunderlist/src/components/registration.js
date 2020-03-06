import React from "react";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { withRouter, NavLink } from "react-router-dom";
import * as Yup from "yup";
// import styled from "styled-components";

const Registration = ({ touched, errors }) => {
  return (
    <div className="container">
      <h2>Registration</h2>
      <Form>
        <label htmlFor="username">Please provide a Username: </label>
        <Field name="username" type="text" />
        {touched.username && errors.username && (
          <p className="errors">{errors.username}</p>
        )}
        <br />
        <label htmlFor="password">Please create a Password: </label>
        <Field name="password" type="password" />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <button type="submit">SUBMIT</button>
        <h3>Already registered?</h3>

        <NavLink to="/login">Login</NavLink>
        {/* <Route exact path="/login">
          <button type="button">Login here</button>
          <Login />
        </Route> */}
      </Form>
    </div>
  );
};

const FormikForms = withRouter(
  withFormik({
    mapPropsToValues({ username, password }) {
      return {
        username: username || "",
        password: password || ""
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("username is required!"),
      password: Yup.string().required("password is required!")
    }),
    handleSubmit(values, { props }) {
      axiosWithAuth()
        .post("register", values)
        .then((response) => {
          // console.log("success for registration", response);
          window.localStorage.setItem("token", response.data.token);
          props.history.replace(`users/${response.data.id}`);
        })
        .catch((err) => console.log(err.response));
    }
  })(Registration)
);
export default FormikForms;
