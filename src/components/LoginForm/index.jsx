import React from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './LoginForm.scss'
import logo from '../../assets/logo-violet.png'
import { NavLink } from 'react-router-dom';
import { FastField, Form, Formik } from 'formik'
import InputField from '../../custom-fields/InputField';
import * as Yup from 'yup'

function LoginForm(props) {
  const initialValue = {
    username: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Username is required'),
  })

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
    >
      {formikProps => {
        const {values, errors, touched} = formikProps
        console.log({values, errors, touched})

        return (
          <Form className="login-form">
            <div className="login-form__title">
              <span>LOG IN</span>
              <div className="logo">
                Wi
              </div>
            </div>
            <div className="login-form__login">
              <FastField
                name="username"
                component={InputField}

                label="username"
                placeholder=""
              />
              <FastField
                name="password"
                component={InputField}
                type="password"
                label="password"
                placeholder=""
              />
              <button type="submit">Login</button>
            </div>
            <div className="login-form__another">
              <div>
                Go to
                <span>
                  <NavLink to="/">Homepage</NavLink>
                </span>
              </div>
              <div>
                Have not the account!
                <span>
                  <NavLink to="/account/register">Sign up</NavLink>
                </span>
              </div>
            </div>
          </Form>
        )
      }
      }
    </Formik>
  );
}

export default LoginForm;