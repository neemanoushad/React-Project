import React from 'react'
import {Box,Typography,Container} from "@mui/material"
import {styled} from "@mui/system"
import {data} from "../Data/Data"
import CustomCard from '../../Componenets/CustomCard/CustomCard'

function Doctor() {
const DoctorBox=styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"space-between",
    marginTop:theme.spacing(5),
    [theme.breakpoints.down("md")]:{
        flexDirection:"column",
        alignItems:"center"
    }
}))
const PropertyTextBox=styled(Box)(({theme})=>({
[theme.breakpoints.down("md")]:{
    textAlign:"center"
}
}))
  return (
     <Box sx={{backgroundColor:"#F5FAFE",mt:5,py:10}}>
<Container>
    <PropertyTextBox>
        <Typography sx={{fontSize:"20px",fontWeight:"800",ml:"13px"}}>
            Our Leadership Members
        </Typography>
        <Typography sx={{fontSize:"16px",fontWeight:"300",ml:"13px",mt:"2px",color:"grey"}}>
        Our leadership team is at the heart of the governance of Hum Hospitals - India.
        </Typography>
    </PropertyTextBox>
<DoctorBox>

{data.map((itemz)=>(
<CustomCard
key={itemz.index}
img={itemz.img}
specialization={itemz.specialization}
name={itemz.name}/>
))}





</DoctorBox>



</Container>

     </Box>
  )
}

export default Doctor