import React, { useState } from 'react'
import LogIn from './LogIn'
import Navigation from './navigation'
import Register from './Register'

function Home() {
  const [isRegistered,setIsRegister] = useState(false)
  return (
    <div className="relative w-full h-full sm:h-screen bg-custom-gradient-1">
        <Navigation/>
        <LogIn register={isRegistered} setRegistration ={setIsRegister}/>
        {isRegistered && <Register register={isRegistered}/>}
  
    </div>
   
  )
}

export default Home