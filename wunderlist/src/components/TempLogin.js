import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { withFormik, Form, Field } from "formik";
import { withRouter } from "react-router-dom";

const TempLogin = () => {
  return (
    <div>
      <h1>WunderList </h1>
      <Form>
        <Field type="text" name="email" />
        <Field type="password" name="password" />
        <button type="submit">Login</button>
      </Form>
    </div>
  );
};

const FormikForm = withRouter(
  withFormik({
    mapPropsToValues({ email, password }) {
      return {
        email: email || "",
        password: password || ""
      };
    },
    handleSubmit(values, { props }) {
      axiosWithAuth()
        .post("login", values)
        .then((res) => {
          console.log(res);
          // window.localStorage.setItem("token", res.data.payload);
          // props.history.replace("/colors");
        })
        .catch((err) => console.log(err));
    }
  })(TempLogin)
);

export default FormikForm;
