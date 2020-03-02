import React from "react";

const LoginForm = ({}) => {
  const [person, setPerson] = [];

  return (
    <div className="container">
      <Form>
        <label htmlFor="email">Email: </label>
        <Field id="email" name="email" type="email" />
        <br />
        <label htmlFor="password">Password: </label>
        <Field id="password" name="password" type="password" />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
      </Form>
    </div>
  );
};
