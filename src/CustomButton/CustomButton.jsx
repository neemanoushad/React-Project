import React from 'react'
import {Button} from '@mui/material'
import {styled} from '@mui/system';


const CustomButton=({
    backgroundColor,
    color,
    welcomeBtn,
    guideBtn,
    getStartedBtn,
    buttonText,

})=>{
const CustomButton=styled(Button)(({theme})=>({
  backgroundColor:backgroundColor,
  color:color,
  borderRadius:"7px",
  border:"2px solid transparent",
  display:'block',
  fontSize:"14px",
  fontWeight:"700",
  transform:'none',
  '$:hover':{
    backgroundColor:color,
    color:backgroundColor,
    borderColor:backgroundColor
  },
  [theme.breakpoints.down("md")]:{
    margin:(welcomeBtn || getStartedBtn) && theme.spacing(0,"auto",3,"auto"),
    width:(welcomeBtn || getStartedBtn) && "90%",

  },
  [theme.breakpoints.down("sm")]:{
    marginTop:guideBtn && theme.spacing(3),
    width:guideBtn && "90%",
  },



}))

  return (
<CustomButton>{buttonText}</CustomButton>
  )
}

export default CustomButton;