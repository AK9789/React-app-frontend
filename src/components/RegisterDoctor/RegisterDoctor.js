import React from 'react'
import * as Yup from "yup";
import axios from 'axios'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material'

const RegisterDoctor = () => {
  const navigate = useNavigate();

    const initialValues={
        doctorName:"",
        doctorSpecialization:"",
        doctorExperience:"",
        doctorEmail:"",
        doctorPassword:""
    }

    const validationSchema = Yup.object().shape({
        doctorName:Yup.string().required(),
        doctorSpecialization:Yup.string().required(),
        doctorExperience:Yup.string().required(),
        doctorEmail:Yup.string().required(),
        doctorPassword:Yup.string().min(3).max(15).required()
      });

    const onSubmit = (data)=>{
        axios.post("http://localhost:5001/doctors",data,{headers:{accessToken: sessionStorage.getItem("accessToken") }}).then((response)=>{
            console.log("Submitted")
            navigate('/doctors')
            alert("Successfully Doctor Created!")
        })
        // console.log(data)
    }
    
    
  return (
    <div>
        <h1>RegisterDoctor</h1>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='formContainer'>
              <label>Name: </label>
              <ErrorMessage name="doctorName" component="span" />
              <Field id="inputRegisterDoctor" name="doctorName" placeholder="(Ex. John...)"/>

              <label>Specialization: </label>
              <ErrorMessage name="doctorSpecialization" component="span" />
              <Field autocomplete="off" id="inputRegisterDoctor" name="doctorSpecialization" placeholder="Specialization"/>

              <label>Experience: </label>
              <ErrorMessage name="doctorExperience" component="span" />
              <Field autocomplete="off" id="inputRegisterDoctor" name="doctorExperience" placeholder="Experience"/>

              <label>Email: </label>
              <ErrorMessage name="doctorEmail" component="span" />
              <Field autocomplete="off" type="email" id="inputRegisterDoctor" name="doctorEmail" placeholder="example@gmail.com"/>

              <label>Password: </label>
              <ErrorMessage name="doctorPassword" component="span" />
              <Field autocomplete="off" type="password" id="inputRegisterDoctor" name="doctorPassword" placeholder="Password"/>
              
              <Button variant="contained" type="submit"> Register</Button>
              <br></br>
              <Button color="secondary" variant="contained" type="reset">Reset</Button>
            </Form>
          </Formik>

    </div>
  )
}

export default RegisterDoctor