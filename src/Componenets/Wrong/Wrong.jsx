import React from 'react'
import {Box,Container,Typography} from "@mui/material"
import {styled} from "@mui/system"

function Wrong() {
const CustomBox=styled(Box)(({theme})=>({
    width:"30%",
  [theme.breakpoints.down("md")]:
  {
    width:"85%"
  }
}))
  return (
    <Box sx={{
        marginTop:"100px",
        display:"flex",
        flexDirection:"column",alignItems:'center'
        }}>
       <div style={{height:"5px",width:"5%",backgroundColor:"black",margin: "0 auto"}}>
        </div>
       <Typography sx={{fontSize:"64px",color:"red",fontWeight:700}}>
        409
       </Typography>
       <CustomBox>
        <Typography sx={{marginRight:"350px",marginBottom:"10px"}}> 
   Try:
        </Typography>
        <Typography sx={{fontSize:"16px"}}>
          <ul>
            <li>Checking the network cables, modem, and router</li>
            <li>Reconnecting to Wi-Fi</li>
            <li>Running Windows Network Diagnostics</li>
          </ul>
        </Typography>
       </CustomBox>
        

   

    </Box>
    
  )
}

export default Wrong