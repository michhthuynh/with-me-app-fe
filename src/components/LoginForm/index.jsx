import React, { useState } from 'react';
import './LoginForm.scss'
import { NavLink } from 'react-router-dom';
import { FastField, Form, Formik } from 'formik'
import InputField from '../../custom-fields/InputField';
import * as Yup from 'yup'
import userApi from '../../api/userApi';

const msgRequired = '* This field is required'
const msgUserFail = '* Username is not available'
const msgPasswordFail = '* Password is not available'

function LoginForm(props) {
  const [errorMsg, setErrorMsg] = useState('')
  const initialValue = {
    username: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(msgRequired).min(6, msgUserFail).max(16, msgUserFail).trim(msgUserFail),
    password: Yup.string().required(msgRequired).min(6, msgPasswordFail).max(16, msgPasswordFail).trim(msgPasswordFail),
  })

  const fetchUserLogin = async (values) => {
    try {
      const response = await userApi.postLogin({ username: values.username, password: values.password })
      console.log(response)
    } catch (error) {
      setErrorMsg('* Username or password is invalid')
    }
  }

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={values => {
        fetchUserLogin(values)
      }}
    >
      {formikProps => {
        const { errors } = formikProps
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
              {
                errorMsg && <div className="login-form__login__error-message">{errorMsg}</div>
              }
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