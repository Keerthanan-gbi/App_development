import React, { useState } from "react";
import { Link } from "react-router-dom";
import './rating.css';
export const Rating = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [pas, setPas] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        
                <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            
                <label htmlFor="email">NAME :</label>
                <br></br>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your name" id="email" name="email" />
                <br></br>
                <label htmlFor="password">EMAIL :</label>
                <br></br>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="text" placeholder="Enter your email" id="password" name="password" />
                <br></br>
                <label htmlFor="passwor">GIVE YOUR RATING HERE :</label>
                <input value={pas} onChange={(e) => setPas(e.target.value)} type="number" placeholder="Increase or Decrease the Rating " id="password" name="password" />
                <br></br>
                <div className="ka">
                <button type="submit"><Link to="/ra">SUBMIT</Link></button>
                </div>
                </div>
    )
}
