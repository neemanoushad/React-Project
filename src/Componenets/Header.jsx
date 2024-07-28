import React, { useState } from 'react';
import { Box, Typography, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import CustomButton from '../CustomButton/CustomButton';
import logo from './Images/logo.png';
import MenuIcon from "@mui/icons-material/Menu";
import FetauredPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from "@mui/icons-material/Home";
import ContactIcon from "@mui/icons-material/Contacts";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [mobilemenu, setMobileMenu] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setMobileMenu({ ...mobilemenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {navlinks.map((item, index) => (
          <ListItem key={index} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <MiscellaneousServicesIcon />}
                {index === 2 && <ContactIcon />}
                {index === 3 && <FetauredPlayListIcon />}
              </ListItemIcon>
              <ListItemText primary={item.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const navlinks = [
    { path: '/', display: "Home" },
    { path: '/service', display: "Service" },
    { path: '/doctor', display: "Contact us" },
    { path: '/location', display: "About us" }
  ];

  const NavBarLinksBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: 'none'
    }
  }));

  const NavBarLink = styled(Typography)(() => ({
    fontSize: '14px',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: 'lightblue'
    }
  }));

  const ImageLink = styled("img")(({ theme }) => ({
    cursor: 'pointer',
    width: '50px',
    height: '50px',
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  }));

  const CustomIcon = styled(MenuIcon)(({ theme }) => ({
    display: 'none',
    cursor: 'pointer',
    marginRight: theme.spacing(2),
    color: 'white',
    [theme.breakpoints.down("md")]: {
      display: 'block'
    }
  }));

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '40px', maxWidth: 'auto', backgroundColor: "#213343 ", marginLeft: '0px', marginBottom: '-24px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CustomIcon onClick={toggleDrawer("left", true)} />
          <Drawer anchor='left' open={mobilemenu["left"]} onClose={toggleDrawer("left", false)}>
            {list("left")}
          </Drawer>
          <ImageLink src={logo} alt="" />
        </Box>
        <NavBarLinksBox>
          {navlinks.map((item, index) => (
            <NavBarLink key={index} variant='body2' onClick={() => navigate(item.path)}>
              {item.display}
            </NavBarLink>
          ))}
        </NavBarLinksBox>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <NavBarLink variant='body2'>SignUp</NavBarLink>
        <CustomButton backgroundColor='#d4bb9b ' color='#fff' buttonText="Register" />
      </Box>
    </Box>
  );
}

export default Header;
