import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { auth, googleAuthProvider, facebookAuthProvider } from '@config'
import { setUser } from "@store/actions";
import "./style.css"

function Login () {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleLoginGmail = () => {
        auth.signInWithPopup(googleAuthProvider)
            .then(result => {
                dispatch(setUser(result))
                history.push('/home')
        })
    }

    const handleLoginFb = () => {
        auth.signInWithPopup(facebookAuthProvider)
            .then(result => {
                console.log(result, 'result');
                history.push('/home')
        })
    }

    return (
        <>
            <Helmet>
                <title>Login Test SehatQ</title>
                <meta name="description" content="Login Test SehatQ" />
                <meta name="keyword" content="Login Test SehatQ" />
            </Helmet>
            <div className="App">
                <div className="login-section">
                    <h1 className="mb-8">LOGIN</h1>
                    <button onClick={handleLoginGmail} className="btn-gmail mb-4">Gmail</button>
                    <button onClick={handleLoginFb} className="btn-facebook mb-4">Facebook</button>
                </div>
            </div>
        </>
    )
}

export default Login