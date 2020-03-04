import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Registration = ({ touched, errors }) => {
  return (
    <div className="container">
      <h2>Registration</h2>
      <Form>
        <label htmlFor="email">Please provide an Email: </label>
        <Field name="email" type="email" />
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}
        <br />
        <label htmlFor="password">Please create a Password: </label>
        <Field name="password" type="password" />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <button type="submit">SUBMIT</button>
        <h3>Already registered?</h3>
        <Route exact path="/login">
          <button type="button">Login here</button>
          <Login />
        </Route>
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
        .post(" https://wunderlist5production.herokuapp.com/api/users/", values)
        .then(response => {
          console.log("success", response);
          window.localStorage.setItem("token", response.data.token);
          props.history.push("/todos");
        })
        .catch(err => console.log(err.response));
    }
  })(Registration)
);
export default FormikForms;
