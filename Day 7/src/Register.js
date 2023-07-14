import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [pas, setPas] = useState('');
    const [name, setName] = useState('');
    const [nam, setNam] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
        <h1><center>Register Page :</center></h1>
        <br></br>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">First name</label>
            <br></br>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="First Name" />
            <br></br>
            <label htmlFor="nam">Last name</label>
            <br></br>
            <input value={nam} nam="nam" onChange={(e) => setNam(e.target.value)} id="nam" placeholder="Last Name" />
            <br></br>
            <label htmlFor="email">Email</label>
            <br></br>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <br></br>
            <label htmlFor="password">Password</label>
            <br></br>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <br></br>
            <label htmlFor="passwor">Confirm Password</label>
            <br></br>
            <input value={pas} onChange={(e) => setPas(e.target.value)} type="passwor" placeholder="********" id="passwor" name="passwor"/>
            <br></br>
            <div className="cde">
            <button type="submit"><Link to="/login">SUBMIT</Link></button>
            </div>
            <br></br>
            <center><Link to="/login"><b><h4>Already have an account ? Click to Login.</h4></b></Link></center>
            <br></br>
            <div className="lmo">
                <center><Link to="/"><b><u><i>Back to Home Page</i></u></b></Link></center>
                </div>
            
        </form>
    </div>
    )
}