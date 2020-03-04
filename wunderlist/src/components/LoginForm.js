import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { Button } from "reactstrap";
import * as Yup from "yup";

const NewContainer = styled.div`
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

const LoginForm = ({ touched, errors }) => {
  return (
    <NewContainer className="container">
      <NewSection className="section">
        <Form>
          <label htmlFor="username">Username: </label>
          <Field name="username" type="username" />
          {touched.username && errors.username && (
            <p className="errors">{errors.username}</p>
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
        .post("login", values)
        .then(response => {
          console.log("success", response);
          window.localStorage.setItem("token", response.data.token);
          //props.history.replace("/todos");
        })
        .catch(err => console.log(err.response));
    }
  })(LoginForm)
);
export default FormikForms;
