import React, {useState} from 'react';

import authGif from './../assets/authPage.gif'

import './Login.css'
import Signup from './Signup';
import Signin from './Signin';


const Login = () => {
const [status,setStatus]=useState('')
const [action,setAction]=useState(true)

  return(
    <>
    {action ?
    <div className='authOptions'>
      <div className='gif'>
        <img src={authGif} alt="authenticate yourself :)"/>
      </div>
      <div className='btnContainer'>
        <button onClick={e=>{setStatus('signup');setAction(false)}}>New user?</button>
        <button onClick={e=>{setStatus('signin'); setAction(false)}}>Already a user?</button>
      </div>
    </div>
    :
    status==='signup'?
    <Signup/>
    :
    <Signin/>
    }
    </>
    
  );
}


export default Login;
