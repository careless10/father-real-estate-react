import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { Formik, Form, Field } from "formik";

const Login = () => {
  const Button = props => (
    <a {...props} className="nav-link">
      دخول
    </a>
  );

  function submit(values) {
    console.log(submit);
  }

  return (
    <div>
      <Modal Button={Button}>
        <Formik initialValues={{ email: "", password: "" }}>
          <Form>
            <div className="form-group">
              <label htmlFor="firstName">البريد الإلكتروني</label>
              <Field
                type="email"
                className="form-control"
                name="email"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">كلمة المرور</label>
              <Field type="password" name="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">
               دخول
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default Login;
