import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='master'>
            <div className='container'>
                <form>
                <h1 className='title'>Login</h1>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="email" id="" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor=""></label>
                        <input className='login-btn' type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;