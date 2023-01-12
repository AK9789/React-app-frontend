import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../App.css'
import doc3 from '../../resources/doc3.jpg'

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const Doctor = () => {

    useEffect(()=>{
        axios.get("http://localhost:5001/doctors").then((response)=>{
            setListOfDoctors(response.data)
        })
      },[])

      const [listOfDoctors, setListOfDoctors] = useState([]);
      const navigate = useNavigate();

  return (
    <div className='doctorContainer'>
        <h1>Our Doctors</h1>
        <div className='doctorSubContainer'>
        { listOfDoctors.map((value, key)=>{
            return(
                <Container className='doctor-container' >
                <Grid container spacing={7} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6} lg={4} key={value.doctorId}>
                            <div className='doctorCardContainer'>
                                <Card sx={{ maxWidth: 350 }}>
                                    <CardMedia component="img" height="140" width="100" image={doc3}/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">{value.doctorName}</Typography>
                                        <Typography variant="h6" color="text.secondary">{value.doctorSpecialization}</Typography>
                                        <Typography variant="body" color="text.secondary">Email: {value.doctorEmail}</Typography>
                                    </CardContent>
                                    <CardActions sx={{paddingLeft: "25%" }}>
                                        <Button size="small" variant="contained"  onClick={()=>{navigate(`/onedoc/${value.doctorId}`)}}>Book an Appointment</Button>
                                    </CardActions>
                                </Card>
                            </div>
                            
                        </Grid>
                </Grid>
            </Container>
            )
        })}
        </div>

    </div>
  )
}

export default Doctor