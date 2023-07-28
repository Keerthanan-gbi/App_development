import React, { useState } from "react";
import { Link } from "react-router-dom";
import './feedback.css';
import axios from "axios";

export const Feedback = (props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pas, setPas] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const data={
            name:name,
            email:email,
            pas:pas,
            // password:password
        }
        axios.post("http://localhost:8081/addsupport",data)
    }
    return (
        <div className="login">
        <br></br>
        <br></br>
        <div className="auth-form-container fu">
            <h2><center>FEEDBACK PAGE :</center></h2>
            <br></br>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="name">NAME :</label>
                <br></br>
                <input value={name} onChange={(e) => setName(e.target.value)}type="text" placeholder="Enter your name" id="name" name="name" />
                <br></br>
                <label htmlFor="password">EMAIL :</label>
                <br></br>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email" />
                <br></br>
                <label htmlFor="passwor">GIVE YOUR FEEDBACK :</label>
                <br></br>
                <div className="gbi">
                <input value={pas} onChange={(e) => setPas(e.target.value)} type="text" placeholder="Type Your Feedback here" id="passwor" name="passwor"/>
                </div>
                <br></br>
                <div className="abc">
                <button type="submit">SUBMIT</button>
                </div>
                <br></br>
                </form>
                </div>
                </div>
    )
}
