import React from "react";
import { Box, Divider, Typography ,Container} from "@mui/material";
import { styled } from "@mui/system";
import image from "../../Componenets/Images/us.webp";
function Photo() {
  const ImageBox = styled(Box)(({ theme }) => ({
  width:"100%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const Divider=styled("div")(({theme})=>({
    width:"13%",
    height:"5px",
    backgroundColor:"black",
    [theme.breakpoints.down("md")]:{
        marginLeft:"auto",
        marginRight:"auto",
    }

  }))

  const TextBox=styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"space-between",
    marginTop:theme.spacing(8),
    padding:theme.spacing(0,5,0,5),
    [theme.breakpoints.down("sm")]:{
        flexDirection:"column",
        gap:theme.spacing(5),
    }

  }))
  const Largest=styled(Typography)(({theme})=>({
    fontSize:"64px",
    color:"#213343",
    fontWeight:"700",
    [theme.breakpoints.down("md")]:{
        fontSize:"32px",
    }
  }))
  const SmallestText=styled(Typography)(({theme})=>({
    fontSize:"18px",
    color:'lightBlue',
    fontWeight:"500",
    [theme.breakpoints.down("md")]:{
        fontSize:"14px"
    }
  }))
  return (
    <Box
      sx={{
        py: 10,
      }}
    >
      <Container>
        <CustomBox>
          <ImageBox>
            <img
              src={image}
              alt=""
              style={{ maxWidth:"100%"}}
            />
          </ImageBox>
          <Box>
            <Divider/>
            <Typography
              variant="h1"
              sx={{ fontSize: "35px", my: 3, fontWeight:"700" }}
            >
              At Hum Hospital, Your Well-Being Comes First
            </Typography>
            <Typography variant="h3" sx={{ fontSize: "16px",lineHeight:"27px" }}>
              Compassionate care and exceptional service define our approach,
              ensuring respect and professionalism for every patient and staff
              member.
            </Typography>
          </Box>
        </CustomBox>
     
<TextBox>
<Box sx={{
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
    }}>
    <Largest>50+</Largest>
    <SmallestText>Hosipitals</SmallestText>
    <Typography sx={{
        fontSize:"14px",mt:2
    }}>Providing world-class healthcare</Typography>

</Box>
<Box sx={{display:"flex",
flexDirection:"column",
alignItems:"center"}}>
<Largest>250+</Largest>
<SmallestText>Doctors</SmallestText>
<Typography sx={{fontSize:"14px",mt:2}}>With years of experience</Typography>
</Box>
<Box sx={{display:"flex",
flexDirection:"column",
alignItems:"center"}}>
<Largest>1 lac+</Largest>
<SmallestText>Patience</SmallestText>
<Typography sx={{fontSize:"14px",mt:2}}>Treated every year</Typography>

</Box>


</TextBox>
</Container>
    </Box>
  );
}

export default Photo;
