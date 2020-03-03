import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { Jumbotron, Button } from "reactstrap";
import * as Yup from "yup";
const LoginForm = ({ touched, errors }) => {
  const NewContainer = styled.div`
    .jumbotron: {
      background-color: blue;
    }
  `;

  //const NewButton = styled.button`
  //margin: auto;
  //width: 50%;
  //border: 2px solid black;
  //`;

  return (
    <NewContainer className="container">
      <Jumbotron>
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
      </Jumbotron>
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
