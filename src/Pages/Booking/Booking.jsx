import React from 'react'
import {Box,Typography} from "@mui/material"
import {styled} from "@mui/system"

import Bookimg from "../../Componenets/Images/appointment.png"
import slot from "../../Componenets/Images/slot.png"
import service from "../../Componenets/Images/service.png"

import  ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import CustomButton from '../../CustomButton/CustomButton'

function Booking() {

    const CustomBox=styled(Box)(({theme})=>({
        width:"30%",
        [theme.breakpoints.down("sm")]:{
            width:"85%"
        }
    }))

    const BookBoxs=styled(Box)(({theme})=>({
        display:"flex",
        justifyContent:"space-between",
        width:"75%",
        marginTop:theme.spacing(5),
        marginBottom:theme.spacing(5),
        [theme.breakpoints.down("md")]:{
            width:"100%",

        },
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column",
            marginBottom:"0",
        }

    }))
    
   const BookBo=styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    marginTop:theme.spacing(3),
    [theme.breakpoints.down("sm")]:{
        margin:theme.spacing(2,0,2,0),
    }
   }))

  return (
   <Box sx={{

    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    padding:"40px"
   }}>
<div style={{
    width:"5%",
    height:"5px",
    backgroundColor:"black",
    margin:"0 auto"
}}>


</div>
<Typography variant="h3"sx={{ fontSize:"35px",fontWeight:"bold",my:3,color:"black"}}>
    How to Book?
</Typography>
<CustomBox>
    <Typography variant="body2"sx={{
        fontSize:'16px',
        fontWeight:"500",
        color:"#5A6473",
        textAlign:"center"


    }}>
        Everything you need to know for booking an slot

    </Typography>

</CustomBox>
<BookBoxs>
<BookBo>
<img src={service} alt="" style={{width:"100px", height:"100px"}}/>
<Typography variant='body2'sx={{
    fontSize:"20px",
    fontWeight:"500",
    color:"black",
    my:1
}}>
Registration
</Typography>
<Box sx={{
    cursor:"pointer",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
}}>
    <Typography sx={{
        fontSize:"14px",
        fontWeight:'bold',
        color:"black"
    }}>
        How to  register

    </Typography>
    <ArrowRightAltIcon style={{color:"black"}}/>
</Box>
</BookBo>
<BookBo>
    <img src={slot} alt="" style={{width:"100px",height:"100px"}}/>
    <Typography variant='body2'sx={{
        fontSize:"20px",
        fontWeight:"500",
        color:"black",
        my:1
    }}>
Slot
    </Typography>
    <Box sx={{
        cursor:"pointer",
        display:'flex',
        justifyContent:'center',
        alignItems:"center"
    }}>
        <Typography sx={{
            fontSize:"14px",
            fontWeight:"bold",
            color:"black",
          
        }}>
       How to book slot
        </Typography>
        <ArrowRightAltIcon style={{color:"black"}}/>

    </Box>
</BookBo>
<BookBo>
    <img src={Bookimg} alt=""  style={{width:"100px",height:"100px"}}/>

<Typography variant='body2' sx={{
    fontSize:"20px",
    fontWeight:"500",
    color:"black",
    my:1
}}>
Consult Doctor
</Typography>
<Box sx={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    cursor:"pointer"
}}>
<Typography sx={{
    fontSize:"14px",
    color:"black",
    fontWeight:"bold"

}}>
    How to consult doctor

    </Typography>
    <ArrowRightAltIcon style={{color:"black"}}/>
</Box>

</BookBo>


</BookBoxs>
<CustomButton 
backgroundColor="#d4bb9b"
color="white"
buttonText="see full details"
guideBtn={true}
/>

   </Box>
  )
}

export default Booking