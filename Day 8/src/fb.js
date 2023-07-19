import React, { useState } from "react";
import { Link } from "react-router-dom";
import './fb.css';
export const Fb = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [pas, setPas] = useState('');

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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       <br></br>
        <br></br>
        <br></br>
            <h2><center>YOUR FEEDBACK WAS SUCESSFULLY SUBMITTED !!!</center></h2>
            <br></br>
        <br></br>
            <div className="kn">
            <button type="submit"><Link to="/">Click here to Return to Home Page</Link></button>
            </div>
                </div>
    )
}
