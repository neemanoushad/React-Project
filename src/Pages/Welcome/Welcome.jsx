import React from 'react'
import{Box,Typography,Button} from "@mui/material";
import {styled} from "@mui/system";
import {Container} from "@mui/system";
import CustomButton from "../../CustomButton/CustomButton";
import image from "../../Componenets/Images/health.jpg"



function Welcome() {
const Title=styled(Typography)(({theme})=>({
    color:"white",
    fontSize:"64px",
    fontWeight:"bold",
    [theme.breakpoints.down("sm")]:{
        fontSize:"40px",
    }
    
}))
const CustomBox=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:"center",
    gap:theme.spacing(5),
    marginTop:theme.spacing(3),
    [theme.breakpoints.down("md")]:{
        flexDirection:"column",
        alignitems:"center",
        textAlign:"center",
    },
}));

  return (
   
    <Box sx={{backgroundColor:" #213343",minHeight:"80vh"}}>
        <Container>
<CustomBox>
    <Box sx={{flex:"1"}}> 
    <Typography variant="body2" sx={{
        fontSize:"18px",
        color:"white",
        fontWeight:"500",
        mt:10,
        mb:4,
    }}>
        Welcome to Hum Hospital
    </Typography>
    <Title variant="h1">
    Caring for You, Every Step of the Way
    </Title>
    <Typography variant="body2" sx={{fontSize:"18px",color:"white",my:4}}>
    With leading-edge technology and a team of dedicated professionals, we are committed to guiding you through your health journey. From innovative treatments to personalized care, your well-being is our top priority every step of the way.
    </Typography>
    <CustomButton backgroundColor="#d4bb9b" color="white" buttonText="More About Us" welcomeBtn={true}/>

    </Box>
    <Box sx={{flex:"1.25"}}>
<img src={image} alt="" style={{maxWidth:"100%",marginTop:"70px"}} />
    </Box>

</CustomBox>
        </Container>
    </Box>
  )
}

export default Welcome