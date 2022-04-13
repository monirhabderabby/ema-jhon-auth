import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase.init'
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError]= useState('')

    const handleEmailBlur = e =>{
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e =>{
        setPassword(e.target.value)
    }
    const handleConfirmPasswordBlur = e=>{
        setConfirmPassword(e.target.value)
    }
    const handleCreateUser = (e) =>{
        setError('')
        e.preventDefault();
        if(password !== confirmPassword){
            setPassword('')
            setConfirmPassword('')
            setError("Password didnot matched")
            
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log(userCredential.user);
        })
    }
    return (
        <div>
            <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="gg" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="gfgfgf"  required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="r" />
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up"  required/>
                </form>
                <p>
                    Already Have an account? <Link className='form-link' to="/login">Login</Link>
                </p>
            </div>
        </div>
        </div>
    );
};

export default Signup;