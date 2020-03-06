import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import * as actions from "../../base/auth/action";

const Login = props => {
  const Button = props => (
    <a {...props} className="nav-link">
      دخول
    </a>
  );

  function submit(values) {
    props.tryLogin(values);
  }

  return (
    <div>
      <Modal Button={Button}>
        <Formik onSubmit={submit} initialValues={{ email: "", password: "" }}>
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

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  tryLogin: ({ email, password }) => dispatch(actions.tryLogin(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
