import React from "react";
import "./Navbar.css";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';

const ServiceProviderNavbar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    fetch("http://localhost:5000/logout", {
        method: 'POST',
        credentials: "include",
    }).then(response => {
        if (response.ok){
            setTimeout(function () {
                window.location.reload();
            }, 1300);
        }
    })
}


  return (
    
    <div className="Navbar">
       <h1 class="logo">
       <span>
                <a href="/home">
                  <span>a</span>
                    <span>morr</span>
                  </a>
                </span>
        </h1>
      <div className="nav-items" >
        
        <a href="/about"><b>About</b></a>
        <a href="/FAQ"><b>FAQ</b></a>
        <a href="/contact"><b>Contact</b></a>
        <a href="/appointments"><b>My Appointments</b></a>
      </div>
      <div className="icon">
      <IconButton 
        className="icon"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size="large"
      ><AccountCircleIcon/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{ fontSize: '14px', fontFamily: 'Poppins', color: 'black', backgroundColor: 'white', borderColor: '#d46f5e' }}><SettingsIcon/> <a href="/profile"> <b>Manage Account</b> </a> </MenuItem>
        <MenuItem sx={{ fontSize: '14px',fontFamily: 'Poppins', color: 'black', backgroundColor: 'white', borderColor: '#d46f5e' }}><DeleteIcon />  <b>Delete Account</b></MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '14px',fontFamily: 'Poppins', color: 'black', backgroundColor: 'white', borderColor: '#d46f5e' }}><LogoutIcon />  <a href="/sp_logout"><b>Logout</b></a></MenuItem>
      </Menu>
      </div>
    </div>
  );
};

export default ServiceProviderNavbar;
