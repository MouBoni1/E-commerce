import React from 'react'
import './CSS/LoginSignup.css'
import { useState } from 'react';

const LoginSignup =()=>{

    const [state,setState]= useState("Login");
    const [formData,setFormData]= useState({
        username:"",
        password:"",
        email:""
    })

    const ChangeHandler = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})

    }

    const login = async()=>{
        console.log("Login function executed",formData);
        let responseData;
        await fetch("http://localhost:4000/login",{
            method:"POST",
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),

        }).then((response)=>response.json()).then((data)=>responseData=data)
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors);
        }
        

    }
    const signup = async()=>{
        console.log("Signup function executed",formData);
        let responseData;
        await fetch("http://localhost:4000/signup",{
            method:"POST",
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),

        }).then((response)=>response.json()).then((data)=>responseData=data)
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors);
        }
        
    }


return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>{state}</h1>
            <div className="loginsignup-fields">
                {state==="Sign up"?<input name='username'value={formData.username}onChange={ChangeHandler} type='text'placeholder='Your name'/>:<></>}
                <input name='email' value={formData.email}onChange={ChangeHandler} type='email'placeholder='Your email'/>
                <input name='password'value={formData.password}onChange={ChangeHandler} type='password'placeholder='Your password'/>
            </div>
            <div className="loginsignup-agree">
                <input type='checkbox'name=''id=''/>
                <p>By continuing I agree to the terms of use and privacy policy</p>
            </div>
            <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
            {state==="Sign up"?
            <p className='loginsignup-login'>
                Already have an account?
                <span onClick={()=>{setState("Login")}}>Login here</span>
            </p>:<p className='loginsignup-login'>
                Create an account?
                <span onClick={()=>{setState("Sign up")}}>Click here</span>
            </p>}
            
           
        </div>

    </div>
)

}
export default LoginSignup