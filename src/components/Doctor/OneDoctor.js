import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../../App.css'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const OneDoctor = () => {

  const location = useLocation();
  console.log(location.state.name)

  const [appointments, setAppointments] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:5001/appointments/${location.state.id}`).then((response)=>{
      console.log(response.data)
      setAppointments(response.data)
    })
  },[])
  return (

    <div className='OneDoctorDetailsContainer'>
      <h1>Welcome Doctor</h1>
      <div className='OneDoctorDetails'>
        <Card sx={{ maxWidth: 345, backgroundColor: '#1565c0'}}>
            <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div" sx={{color:'white'}}>{location.state.name}</Typography>
                  <Typography variant="h5" color="text.secondary" sx={{color:'black'}}>{location.state.specialization}</Typography>
                </CardContent>
            </CardActionArea>
          </Card>
      </div>

      <div className='AppointmentTable'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead sx={{backgroundColor:'#23201F'}}> 
              <TableRow >
                <TableCell sx={{color:'white'}}>Name</TableCell>
                <TableCell align="right" sx={{color:'white'}}>Age</TableCell>
                <TableCell align="right" sx={{color:'white'}}>Email</TableCell>
                <TableCell align="right" sx={{color:'white'}}>Address</TableCell>
                <TableCell align="right" sx={{color:'white'}}>Query</TableCell>
                <TableCell align="right" sx={{color:'white'}}>Date</TableCell>
                <TableCell align="right" sx={{color:'white'}}>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { appointments&&appointments.map((value)=>{
                return(
                  <TableRow>
                    <TableCell component="th" scope="row">{value.name}</TableCell>
                    <TableCell align="right">{value.age}</TableCell>
                    <TableCell align="right">{value.email}</TableCell>
                    <TableCell align="right">{value.address}</TableCell>
                    <TableCell align="right">{value.query}</TableCell>
                    <TableCell align="right">{value.date}</TableCell>
                    <TableCell align="right">{value.time}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default OneDoctor