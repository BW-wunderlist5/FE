import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { Jumbotron, Button } from "reactstrap";
import * as Yup from "yup";
const LoginForm = ({ touched, errors }) => {
  const NewContainer = styled.div`
    align-text: center;
    margin-top: 5%;
    border: 5px solid blue;
    background-color: yellow;
    border-radius: 3%;
    height: 10rem;
    width: 40%;
  `;

  const NewSection = styled.section`
    border: 1px solid black;
    margin: 5%;
  `;

  return (
    <NewContainer className="container">
      <NewSection className="section">
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
          <Button color="warning" type="submit">
            SUBMIT
          </Button>
        </Form>
      </NewSection>
    </NewContainer>
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
          window.localStorage.setItem("token", response.data.token);
          props.history.push("/todos");
        })
        .catch(err => console.log(err.response));
    }
  })(LoginForm)
);
export default FormikForms;
