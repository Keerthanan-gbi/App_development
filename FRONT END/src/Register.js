import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const data={
            username:username,
            email:email,
            contact:contact,
            password:password
        }
        axios.post("http://localhost:8080/api/v1/auth/register",data)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
              })
              .catch(function (error) {
                console.log(error);
              });
}
    return (
        <div className="auth-form-container">
        <h1><center>Register Page :</center></h1>
        <br></br>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Username :</label>
            <br></br>
            <input value={username} name="name" onChange={(e) => setUsername(e.target.value)} type="text" id="name" placeholder="Username" />
            <br></br>
            <label htmlFor="email">Email :</label>
            <br></br>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <br></br>
            <label htmlFor="contact">Phone number :</label>
            <br></br>
            <input value={contact} onChange={(e) => setContact(e.target.value)} type="text" placeholder="+91 1234567890" id="text" name="text" />
            <br></br>
            <label htmlFor="password">Password :</label>
            <br></br>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="passwor" name="passwor"/>
            <br></br>
            <div className="abc">
            <button type="submit">SUBMIT</button>
            </div>
            <br></br>
            <center><Link to="/login"><b><h4>Already have an account ? Click to Login.</h4></b></Link></center>
            <div className="lmo">
                <center><Link to="/"><b><u><i>Back to Home Page</i></u></b></Link></center>
                </div>
        </form>
    </div>
    )
}