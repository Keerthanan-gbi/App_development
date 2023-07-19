import React, { useState } from "react";
import { Link } from "react-router-dom";
import './login.css';
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="login">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="auth-form-container fu">
            <h2><center>LOGIN PAGE :</center></h2>
            <br></br>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">EMAIL</label>
                <br></br>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <br></br>
                <label htmlFor="password">PASSWORD</label>
                <br></br>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <br></br>
                <button type="submit"><Link to="/products">SUBMIT</Link></button>
                <br></br>
                </form>
                <center><Link to="/reg"><b><h4>Don't have an account ? Click to Register.</h4></b></Link></center>
                </div>
        
                </div>
    )
}
