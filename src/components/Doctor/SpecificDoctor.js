import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import doc3 from '../../resources/doc3.jpg'
import '../../App.css'

  import axios from 'axios'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const SpecificDoctor = () => {


//useStates
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();
  let { docId } = useParams();
    
  const [specificDoctor, setSpecificDoctor] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:5001/doctors/byId/${docId}`).then((response)=>{
            setSpecificDoctor(response.data)
        })
      },[])

  const onSubmit = (data)=>{
    axios.post("http://localhost:5001/appointments",{name: name, age:age, email: email, mobile:mobile, address:address, query:query, date:date, time:time ,doctorDoctorId:docId }).then((response)=>{
        console.log("Submitted")
        alert("Successfully Appointment Submitted!")
        navigate('/')
      })
  }
    
  return (
    
    <div className='specificDocContainer'>
      <h2>Make an Appointment with {specificDoctor.doctorName}</h2>
        <div className='specificDocContainerNew'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={doc3}  alt="green iguana"/>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">{specificDoctor.doctorName}</Typography>
                  <Typography variant="h5" color="text.secondary">{specificDoctor.doctorSpecialization}</Typography>
                  <Typography variant="h6" color="text.secondary">{specificDoctor.doctorExperience} of Service</Typography>
                </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className='specificDocForm'>
          <div className="formContainer">
            <label>Name: </label>
            <input type="text" id='inputAppointment' placeholder="Name" autoComplete="off" onChange={(event)=>{setName(event.target.value)}}/>

            <label>Age: </label>
            <input type="text" id='inputAppointment' placeholder="Age" autoComplete="off" onChange={(event)=>{setAge(event.target.value)}}/>

            <label>Email: </label>
            <input type="email" id='inputAppointment' placeholder="example@gmail.com" autoComplete="off" onChange={(event)=>{setEmail(event.target.value)}}/>
            
            <label>Mobile: </label>
            <input type="text" id='inputAppointment' placeholder="Mobile No." autoComplete="off" onChange={(event)=>{setMobile(event.target.value)}}/>

            <label>Address: </label>
            <input type="text" id='inputAppointment' placeholder="Address" autoComplete="off" onChange={(event)=>{setAddress(event.target.value)}}/>

            <label>Query: </label>
            <input type="text" id='inputAppointment' placeholder="Your Query..." autoComplete="off" onChange={(event)=>{setQuery(event.target.value)}}/>

            <label>Date: </label>
            <input type="date" id='inputAppointment' className="form-control" name="dateTime" required onChange={(event)=>{setDate(event.target.value)}}/>

            <label>Time: </label>
            <input type="time" id='inputAppointment' className="form-control" name="dateTime" required onChange={(event)=>{setTime(event.target.value)}}/>

            <Button variant="contained" type="submit" onClick={onSubmit}> Register</Button>
          </div>
        </div>
    </div>
  )
}

export default SpecificDoctor