import React from 'react'
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react'
import '../../App.css'
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const navigate = useNavigate();

    const login=()=>{
        const data = { doctorEmail: email, doctorPassword:password}
        axios.post("http://localhost:5001/doctors/login",data).then((response)=>{
            console.log(data)
            if (response.data.error) {
                alert(response.data.error);
              } else {
                sessionStorage.setItem("accessToken", response.data.accessToken);
                navigate('/oneDoctor',{state: {id: response.data.userDetails.doctorId ,name: response.data.userDetails.doctorName, specialization:response.data.userDetails.doctorSpecialization}})
                console.log(response.data)
              }
        })
    }

  return (
    <div>
        <h1>Login</h1>
        <div className='loginForm'>
            <div className='loginFormContent'>
                {/* <label>Email: </label> */}
                <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(event)=>{setEmail(event.target.value)}}/>
            </div>
            <div className='loginFormContent'>
                {/* <label>Password: </label> */}
                <TextField type='password' id="outlined-basic" label="Password" variant="outlined" onChange={(event)=>{setPassword(event.target.value)}}/>
            </div>
            <div className='loginFormContent'> <Button variant="contained" type="submit" onClick={login}>Login</Button></div>
        </div>
        
    </div>
  )
}

export default Login