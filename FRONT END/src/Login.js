import React, { useState } from "react";
import { Link } from "react-router-dom";
import './login.css';
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "./reduxauth/actions";
export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login(username));
      setUsername('');
    const data = {
      username:username,
      password:password
    }
      axios.post("http://localhost:8180/adddetail",data)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
              })
              .catch(function (error) {
                console.log(error);
              });
    }
    return (
        <div className="login">
        <br></br>
        <br></br>
        <br></br>
        <div className="auth-form-container fu">
            <h2><center>LOGIN PAGE :</center></h2>
            <br></br>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username"><b>USERNAME :</b></label>
                <br></br>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" id="username" name="username" required />
                <br></br>
                <label htmlFor="password"><b>PASSWORD :</b></label>
                <br></br>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"  />
                <br></br>
                <div className="abc">
                <button type="submit">SUBMIT</button>
                </div>
                <br></br>
                </form>
                <center><Link to="/reg"><b><h4>Don't have an account ? Click to Register.</h4></b></Link></center>
                <div className="lmo">
                <center><Link to="/"><b><u><i>Go to Home Page</i></u></b></Link></center>
                </div>
                </div>
                </div>
    )
}
