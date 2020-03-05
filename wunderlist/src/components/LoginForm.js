import React from "react";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { Button } from "reactstrap";
import * as Yup from "yup";

const NewContainer = styled.div`
  margin-top: 5%;
  border: 5px solid blue;
  background-color: gold;
  border-radius: 20%;
  width: 40%;
`;
const NewSection = styled.section`
  border: 3px solid blue;
  background-color: lightblue;
  margin: 5%;
  border-radius: 20%;
  padding: 2%;
  color: blue;
`;
const NewP = styled.p`
  color: red;
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
      username: Yup.string().required(<NewP>username required!</NewP>),
      password: Yup.string().required(<NewP>password required!</NewP>)
    }),
    handleSubmit(values, { props }) {
      axiosWithAuth()
        .post("https://wunderlist5production.herokuapp.com/api/login", values)
        .then(response => {
          console.log("success", response);
          console.log("user id", response.data.id);
          window.localStorage.setItem("token", response.data.token);
          props.history.replace(`/users/${response.data.id}`);
        })
        .catch(err => console.log(err.response));
    }
  })(LoginForm)
);
export default FormikForms;
