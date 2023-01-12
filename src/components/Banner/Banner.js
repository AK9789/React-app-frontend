import React from 'react'
import { useNavigate } from 'react-router-dom';
import doc1 from '../../resources/doc1.jpg'
import Button from '@mui/material/Button';

const Banner = () => {

  const navigate = useNavigate();

  return (
    <div className='Banner'>
        <img className="doc-banner" src={doc1} alt="" />
        <div className='content-banner'>
            <h2>We Care! for You</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus repellendus tempore maiores vel ut, quas sequi tempora consequuntur nisi provident quasi incidunt atque optio, ipsa officiis id autem pariatur.</p>
            <Button variant="contained" color="success" sx={{ width: "50%", marginLeft:"25%" }} onClick={()=>{navigate('/doctors')}}>Let's see our Doctors</Button>
        </div> 
    </div>
  )
}

export default Banner