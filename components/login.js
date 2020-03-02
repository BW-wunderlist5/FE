import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";

const LoginForm = ({}) => {
  const [person, setPerson] = useState([]);

  return (
    <div className="container">
      <Form>
        <label htmlFor="email">Email: </label>
        <Field id="email" name="email" type="email" />
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}
        <br />
        <label htmlFor="password">Password: </label>
        <Field id="password" name="password" type="password" />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <button type="submit">SUBMIT</button>
      </Form>
    </div>
  );
};

const FormikForms = withFormik({
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
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(response => {
        console.log("success", response);
        setStatus(response.data);
      })
      .catch(err => console.log(err.response));
  }
})(LoginForm);

export default FormikForms;
