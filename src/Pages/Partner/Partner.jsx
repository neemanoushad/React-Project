import React from 'react'
import Star from "../../Componenets/Images/Star.png"
import logo from "../../Componenets/Images/logo.png"
import Partnerpic from "../../Componenets/Images/partner.png"
import { Box,Typography,Container } from '@mui/material'
import {styled} from "@mui/system"

function Partner() {
const CustomContainer=styled(Container)(({theme})=>({
    display:"flex",
    justifyContent:"space-between",
    [theme.breakpoints.down("sm")]:{
        flexDirection:"column",
        alignItems:"center",
        textAligns:"center",
        marginBottom:theme.spacing(4),
    }

}))
const CustomBox=styled(Box)(({theme})=>({
    [theme.breakpoints.down("sm")]:{
        marginBottom:theme.spacing(4)
    }
}))




  return (
    <Box sx={{mt:10}}>
        <CustomContainer>
            <CustomBox>
                <img src={logo} alt="" style={{width:"20px",height:"20px",maxWidth:"100%"}} />
                <Typography variant='body2' sx={{
                    fontSize:"16px",
                    color:"#7D8589",
                    fontWeight:"bold",
                    mt:2,
                }}>
More than 45,000 trust Hum 
                </Typography>

            </CustomBox>
            <Box>
  <img src={Star} alt=""  style={{maxWidth:"100%"}}/>
  <Typography variant='body2' sx={{
fontSize:"16px",
color:"#7D8589",
fontWeight:"bold",
mt:2,
  }}>
    5-star Rating(2k+ Reviews)
  </Typography>
            </Box>

        </CustomContainer>
        <Container sx={{display:"flex" , flexDirection:"column"}}>
<img src={Partnerpic} alt=""  style={{marginTop:"10px"}} />
        </Container>

    </Box>
 
  )
}

export default Partner