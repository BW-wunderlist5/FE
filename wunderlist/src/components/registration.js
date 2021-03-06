import React from "react";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { withRouter, NavLink } from "react-router-dom";
import * as Yup from "yup";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 30%;
  background-color: lightblue;
  border: 3px solid gold;
  padding: 2%;
  border-radius: 20%;
`;

const NewH2 = styled.h2`
  padding: 0.5%;
  color: blue;
  background-color: gold;
  border: 2px solid blue;
  border-radius: 20%;
  width: 42%;
`;

const NewButton = styled.button`
  margin: auto;
  width: 20%;
  border: 2px solid blue;
  border-radius: 20%;
  color: blue;
  background-color: gold;
`;

const NewSection = styled.section`
  color: blue;
`;

const NewP = styled.p`
  color: red;
`;

const Registration = ({ touched, errors }) => {
  return (
    <MainDiv className="container">
      <NewH2>Registration</NewH2>
      <Form>
        <NewSection>
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
          <NewButton type="submit">SUBMIT</NewButton>
          <h3>Already registered?</h3>

          <NavLink to="/login">
            <NewButton type="button">LOGIN</NewButton>
          </NavLink>
          {/* <Route exact path="/login">
          <button type="button">Login here</button>
          <Login />
        </Route> */}
        </NewSection>
      </Form>
    </MainDiv>
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
        .post("register", values)
        .then(response => {
          console.log("success for registration", response);
          window.localStorage.setItem("token", response.data.token);
          props.history.replace(`users/${response.data.id}`);
        })
        .catch(err => console.log(err.response));
    }
  })(Registration)
);
export default FormikForms;
