import React, { useState} from 'react';
import { firebase, auth } from '../config/firebase';
import anim from './../assets/phoneNum.gif'
import './Login.css'


const Signin=()=>{
    const [mynumber, setnumber] = useState("");
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');
  
    const signin = () => {
        if (mynumber === "" || mynumber.length < 10) return;
        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber("+91"+mynumber, verify).then((result) => {
            setfinal(result);
            setshow(true);
        })
        .catch((err) => {
            alert(err);
            window.location.reload()
        });
      }
  
      // Validate OTP
      const ValidateOtp = () => {
          if (otp === null || final === null)
              return;
          final.confirm(otp).then((result) => {
            console.log(otp+" "+result)
            window.location.href="/home"
          }).catch((err) => {
              alert("Wrong code");
          })
      }
  
    return (
      <div className='signin'>
        <div className='phnContainer'>
            <center>
                <div style={{ display: !show ? "block" : "none" }} className='num'>
                    <h6>Enter your Phone number</h6>
                    <input value={mynumber} 
                    onChange={(e) => {
                    setnumber(e.target.value) 
                    }}
                     placeholder="phone number" id="phoneNumber" />
                    <br/><br />
                    <div id="recaptcha-container"></div>
                    <button onClick={signin}>Send OTP</button>
                </div>

                <div style={{ display: show ? "block" : "none" }} className='otp'>
                    <input type="text" 
                    placeholder={"Enter your OTP"}
                    onChange={(e) => { setotp(e.target.value) }}/>
                    <br /><br />
                    <button onClick={ValidateOtp}>Verify</button>
                </div>
            </center>
       </div>
     
        <img src={anim} className='fir-wave' alt="animation"/>
        <img src={anim} className='sec-wave' alt="animation"/>
      </div>
    )
  }


  export default Signin;