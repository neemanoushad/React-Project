import React from 'react'
import {Box,Typography,Container} from "@mui/material"
import {styled} from "@mui/system"
import image from "../../Componenets/Images/map.jpg"
function Location() {
    const CustomBox = styled(Box)(({theme})=>({
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        background:"linear-gradient(to bottom right, #00B48D, #164D92);",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
        }
    }))
  const imageBox=styled("img")(({theme})=>({
    [theme.breakpoints.down("md")]:{
      width:"50px",
      height:"50px",
    }
  }))

  return (
  
 <CustomBox>
  <Box sx={{marginTop:"-20px"}} >
 <Typography variant="h4" sx={{color:"white",marginleft:"100px",textAlign:"center",marginTop:"-40px",fontWeight:"bold"}}>Location</Typography>
 <Box/>
<Box>
<Typography sx={{ fontSize:"16px",fontWeight:"300",color:"white",margin:"50px"}}>
Hum Healthcare is an emerging healthcare provider in India, with an inherent emphasis on clinical excellence. We provide primary, secondary, tertiary, and quaternary healthcare through our network of 19 hospitals across India.
</Typography>
</Box>
 </Box>
<imageBox>
<img src={image} alt="" style={{width:"300px",height:"300px",margin:"20px"}} />
</imageBox>
 </CustomBox>
  )
}

export default Location