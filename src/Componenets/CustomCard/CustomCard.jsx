import React from 'react'
import{Box,styled,Typography} from "@mui/material"

function CustomCard({img,specialization,name}) {
    const DoctorBox=styled(Box)(({theme})=>({
       borderTopLeftRadius:"10px",
       borderTopRightRadius:"10px",
       maxWidth:350,
       backgroundColor:"white",
       margin:theme.spacing(0,2,0,2),
       [theme.breakpoints.down("md")]:{
        margin:theme.spacing(2,0,2,0),
       },
       "&:hover":{
        backgroundColor:"#f5f5f5",
        boxShadow:"0 0 5px rgba(0,0,0.2)",
        transform:"scale(1.05)",
        transition:"all 0.3s ease-in-out",
       }
    }))
    const ImgContainer=styled(Box)(({theme})=>({
        width:"100%",
    }))
  return (
  <DoctorBox>
    <ImgContainer>
    <img src={img} alt="" style={{height:"300px",width:"300px"}} />
    </ImgContainer>
    <Box sx={{padding:"1rem"}}>
<Typography sx={{fontWeight:"500", fontSize:"16px"}}>
{name}
</Typography>
<Typography sx={{fontWeight:"500", fontSize:"16px"}}>
{specialization}
</Typography>
    </Box>

  </DoctorBox>

 
  )
}

export default CustomCard