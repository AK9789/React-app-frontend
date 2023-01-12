import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../App.css'

import { AppBar,Button,Tab,Tabs,Toolbar,Typography } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {

  const navigate = useNavigate();

const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  

  const handleClose = () => {

    sessionStorage.removeItem("accessToken")
    navigate('/')
    setAnchorEl(null);
  };

    
  return (
    <div className='header'>
        <React.Fragment>
            <AppBar sx={{ background: "#063970" }}>
                <Toolbar>
                    <Typography sx={{ fontSize: "2rem", paddingLeft: "5%" }}>Doctor</Typography>
                    <Tabs sx={{ marginLeft: "auto" }} indicatorColor="secondary" textColor="inherit">
                        {<Tab href='/' onClick={()=> setAnchorEl(null)} label="Home" />}
                        {<Tab href='/doctors' label="Doctors" />}
                        <Tab href='/registerPatient' label="Patient Register" />
                        { sessionStorage.getItem("accessToken")&&<Tab href='/oneDoctor' label="My Accout" /> }
                        <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>More</Button>
                        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button',}}>
                            { sessionStorage.getItem("accessToken")&&<MenuItem onClick={()=> setAnchorEl(null)}><Link to="/registerDoctor">Doctor Register</Link></MenuItem>}
                            { !sessionStorage.getItem("accessToken")&& <MenuItem onClick={()=> setAnchorEl(null)}><Link to="/login">Login</Link></MenuItem>}
                            { sessionStorage.getItem("accessToken")&& <MenuItem onClick={handleClose}>Logout</MenuItem>}
                        </Menu>
                    </Tabs>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    </div>
  )
}

export default Header