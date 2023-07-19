import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Ra = (props) => {
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
            <h2><center>YOUR RATING WAS SUCESSFULLY SUBMITTED !!!</center></h2>
            <br></br>
        <br></br>
            <div className="ka">
            <button type="submit"><Link to="/">Click here to Return to Home Page</Link></button>
            </div>
                </div>
    )
}
