import React from 'react';
import './login.css';
import { Button } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const Login = () => {
    

    return <>
        <div className="main">
            <div className="logo">
                <p className="d"></p>
            </div>
            <h3 className="logoL">Plagio Control</h3>
            <h2 className="tit">Login Plagio Control</h2>
            <p className="comment">Enter you email and password below</p>
            <form >
                <div className="con">
                    <label htmlFor="">EMAIL</label>
                    <input className="in" type="text" placeholder="Email address" name="email" />
                </div>
                <div className="con">
                    <label htmlFor="">PASSWORD</label>
                    <a href="" className="forgot">Forgot password?</a>
                    <input className="in" placeholder="Password" name="password" />
                    <button className="eyeB">
                        <img className="eye" src="https://cdn-icons-png.flaticon.com/512/7042/7042918.png" />
                    </button>
                </div>
                <button className="button">Log In</button>
                <div>
                    <a>No tienes una cuanta?</a>
                    &nbsp;&nbsp;
                    <a href="#" className="singup">Sing up</a>
                </div>
            </form>
        </div>
    </>
}
export default Login;