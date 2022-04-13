// import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword ] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth)


    const handleEmailBlur = e =>{
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e =>{
        setPassword(e.target.value)
    }
    const prevent = (e) =>{
        e.preventDefault()
    }
    const signInUser = ()=>{
        signInWithEmailAndPassword(email, password)
        console.log(user);
    }
    
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={prevent}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur}  type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" onClick={signInUser}/>
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;