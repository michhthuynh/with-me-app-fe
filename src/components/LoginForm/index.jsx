import React from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LoginForm(props) {
    return (
        <div className="login-form">
            <div className="login-form__top">
                <p className="login-form__top__title">You can sign in by</p>
                <button className="login-form__top__button">
                    <FontAwesomeIcon icon={faHome} />
                </button>
            </div>
            <div className="login-form__main">
                <div className="login-form__main__title">

                </div>
                <div className="login-form__main__logo">

                </div>
                <div className="login-form__main_form">
                    <div className="form-group">
                        <label t></label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;