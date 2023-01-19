import React,{useRef} from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./NewForm.css";
import logo from '../img/finallogo.png';

const SignInForm = () => {
    const containerRef = useRef(null);

    const handleSignUpClick = () => {
        containerRef.current.classList.add("sign-up-mode");
      };
    
      const handleSignInClick = () => {
        containerRef.current.classList.remove("sign-up-mode");
      };
      const[signupCredential,setSignupCredential]=useState({name:"",email:"",password:""})
      const[credential,setCredential]=useState({email:"",password:""})
      let navigate=useNavigate();
      
      const handleSubmit1=async(e)=>{
        e.preventDefault();
        const {name, email, password}=signupCredential;
        const response1 = await fetch(`http://localhost:5000/api/auth/createuser`, {
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,email,password}),
    });
    const json1=await response1.json()
    console.log(json1);
    if(json1.success){
      //save the auth token and redirect
      localStorage.setItem('token',json1.authToken);
      alert("User Created")
      navigate("/")
    }
    else{
      alert("invalid credentials")
    }
        }
      
          const handleSubmit=async(e)=>{
          e.preventDefault();
          const response = await fetch(`http://localhost:5000/api/auth/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({email:credential.email,password:credential.password}),
            });
            const json=await response.json()
            console.log(json);
            if(json.success){
              //save the auth token and redirect
              localStorage.setItem('token',json.authToken);
              navigate("/")
              alert("Valid credentials")
              
            }
            else{
              alert("invalid credentials")
            }
          }

    const handleChange=(e)=>{
            setCredential({...credential,[e.target.name]:e.target.value})
    }
    const handleChange1=(e)=>{
      setSignupCredential({...signupCredential,[e.target.name]:e.target.value})
}

  return (
<div className="container1" ref={containerRef}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className="sign-in-form">
          <img src={logo} alt='' style={{height:"60px", width:"60px"}}></img>
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="email" className="form-control" placeholder='EMAIL' id="email" onChange={handleChange} value={credential.email} name="email" aria-describedby="emailHelp"/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder='PASSWORD' onChange={handleChange} className="form-control" value={credential.password} id="password" name="password" required minLength={5}/>
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>
          <form onSubmit={handleSubmit1} className="sign-up-form">
          <img src={logo} alt='' style={{height:"60px", width:"60px"}}></img>
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder='FULL NAME' className="form-control" id="name" name='name' onChange={handleChange1}  aria-describedby="emailHelp"/>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="EMAIL" className="form-control" id="email" name='email' onChange={handleChange1} aria-describedby="emailHelp"/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder='PASSWORD' className="form-control" id="password" name='password' onChange={handleChange1} required minLength={5}/>
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <input type="submit" value="Sign Up" onClick={handleSignUpClick} id="sign-up-btn" className="btn solid" />
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <input type="submit" value="Sign In" onClick={handleSignInClick} id="sign-in-btn" className="btn solid" />
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  )
}

export default SignInForm
