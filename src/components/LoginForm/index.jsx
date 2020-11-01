import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import './LoginForm.scss'
import { NavLink } from 'react-router-dom';
import { FastField, Form, Formik } from 'formik'
import InputField from '../../custom-fields/InputField';
import * as Yup from 'yup'
import Axios from 'axios';
import { verifyLogin, addUsername } from '../../actions/user';
import { useHistory } from 'react-router-dom';

const msgRequired = '* This field is required'
const msgUserFail = '* Username is not available'
const msgPasswordFail = '* Password is not available'

function LoginForm(props) {
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState('')
  const dispatch = useDispatch()
  const initialValue = {
    username: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(msgRequired).min(6, msgUserFail).max(16, msgUserFail).trim(msgUserFail),
    password: Yup.string().required(msgRequired).min(6, msgPasswordFail).max(16, msgPasswordFail).trim(msgPasswordFail),
  })

  const fetchUserLogin = async (values) => {
    const url = process.env.REACT_APP_API_URL + "/auth/login"
    Axios.post(url,
      {
        username: values.username,
        password: values.password
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        }
      }
    ).then(response => {
      const token = response.data.token
      if (token) {
        localStorage.setItem('token', token)
        localStorage.setItem('username', values.username)
        dispatch(verifyLogin(true))
        dispatch(addUsername(values.username))
        history.push('/')
      }
    }).catch(err => {
      setErrorMsg("* Username or password is invalid")
    })
  }

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        fetchUserLogin(values)
        resetForm({
          values: {
            username: values.username,
            password: ''
          }
        })
      }}
    >
      {formikProps => {
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