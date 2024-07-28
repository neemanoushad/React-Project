import React from 'react'
import Welcome from '../../Pages/Welcome/Welcome'
import Partner from '../../Pages/Partner/Partner'
import Booking from '../../Pages/Booking/Booking'
import Doctor from '../../Pages/Doctor/Doctor'
import Photo from '../../Pages/Photo/Photo'
import Location from '../../Pages/Location/Location'    

function Home() {
  return (
   <>
<Welcome/>
 <Partner/>
 <Booking/>
 <Doctor/>
 <Photo/>
 <Location/>
   </>
  )
}

export default Home