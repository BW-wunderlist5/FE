import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { withFormik, Form, Field } from "formik";
import { withRouter } from "react-router-dom";

const TempLogin = () => {
  return (
    <div>
      <h1>WunderList </h1>
      <Form>
        <label htmlFor="username">Username</label>
        <Field type="text" name="username" />
        <label htmlFor="password">Password</label>
        <Field type="password" name="password" />
        <button type="submit">Login</button>
      </Form>
    </div>
  );
};

const FormikForm = withRouter(
  withFormik({
    mapPropsToValues({ username, password }) {
      return {
        username: username || "",
        password: password || ""
      };
    },
    handleSubmit(values, { props }) {
      axiosWithAuth()
        .post("login", values)
        .then((res) => {
          //  console.log("console.log for log in stuff", res);
          // window.localStorage.setItem("token", res.data.token);
          // props.history.replace(`todos`);
        })
        .catch((err) => console.log(err));
    }
  })(TempLogin)
);

export default FormikForm;
