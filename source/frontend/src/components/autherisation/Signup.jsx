import React, { useEffect, useState, useContext,useRef } from 'react';
import { firebase, auth } from '../config/firebase';
import { UserContext } from "./../context/UserContext"
import anim from './../assets/phoneNum.gif'
import otpAnim from './../assets/otp.gif'
import './Login.css'

const Signup=()=>{
    // const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [userContext, setUserContext] = useContext(UserContext)
  
    const [otpStatus,setOtpStatus]=useState(false)
    const [mynumber, setnumber] = useState("");
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');
    const isFirstRender = useRef(true)
  
  
   
    useEffect(() => {
      if (!isFirstRender.current) {
        window.location.href="/home"
        console.log(userContext) 
      }
    }, [userContext])
  
    const formSubmitHandler = e => {
      e.preventDefault()
      // setIsSubmitting(true)
      setError("")
  
      const genericErrorMessage = "Something went wrong! Please try again later."
  
      fetch("http://localhost:8081/users/signup", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, phoneNumber:"+91"+mynumber, password }),
      })
        .then(async response => {
          // setIsSubmitting(false)
          if (!response.ok) {
            if (response.status === 400) {
              setError("Please fill all the fields correctly!")
            } else if (response.status === 401) {
              setError("Invalid email and password combination.")
            } else if (response.status === 500) {
              console.log(response)
              const data = await response.json()
              if (data.message) setError(data.message || genericErrorMessage)
            } else {
              setError(genericErrorMessage)
            }
          } else {
            const data = await response.json()
              setUserContext(oldValues => {
              return { ...oldValues, token: data.token }
              })
              isFirstRender.current = false
            }
        })
        .catch(error => {
          // setIsSubmitting(false)
          setError(genericErrorMessage)
         
        })
    }
  
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
        setOtpStatus(true)
        window.location.href="/home"  
          }).catch((err) => {
              alert("Wrong code");
          })
      }
  
      return (
      <div className='signup'>
      {!otpStatus?
      <div className='phnContainer'>
      <center>
        <div style={{ display: !show ? "block" : "none" }} className='num'>
          <h6>Enter your Phone number</h6>
          <input value={mynumber} onChange={(e) => {
          setnumber(e.target.value) }}
            placeholder="phone number" id="phoneNumber" />
          <br /><br />
          <div id="recaptcha-container"></div>
          <button onClick={signin}>Send OTP</button>
        
        </div>
        <div style={{ display: show ? "block" : "none" }} className='otp'>
  
          <input type="text" placeholder={"Enter your OTP"}
            onChange={(e) => { setotp(e.target.value) }}></input>
          <br /><br />
          <button onClick={ValidateOtp}>Verify</button>
        </div>
      </center>
    </div>
    :""
    // <form className='auth-form' onSubmit={formSubmitHandler}>
    //   <input id="firstName"
    //           placeholder="First Name"
    //           onChange={e => setFirstName(e.target.value)}
    //           value={firstName}
    //   />
    //   <input  id="lastName"
    //           placeholder="Last Name"
    //           onChange={e => setLastName(e.target.value)}
    //           value={lastName}
    //   />
    //   <input id="password"
    //           placeholder="Password"
    //           type="password"
    //           onChange={e => setPassword(e.target.value)}
    //           value={password}
    //         />
    //   <input id="phoneNumber"
    //   type="tel"
    //   value={mynumber} style={{display:"none"}}/>
    //   <button intent="primary" placeholder="Register" fill type="submit">Register</button> 
    // </form>
      }
      
      <div id='otpAnim' style={{display:"none"}}>
        <div>
        <img src={otpAnim} alt="otp sent" />
      <p>OTP sent!</p>
        </div>
      </div>  
      
      <img src={anim} className='fir-wave' alt="animation"/>
      <img src={anim} className='sec-wave' alt="animation"/>
  
      </div>	
      );
  }
  export default Signup;