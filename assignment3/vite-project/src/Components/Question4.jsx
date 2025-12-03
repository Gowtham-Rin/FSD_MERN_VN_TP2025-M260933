import React, { useState } from 'react'

function Question4() {
   
    const [username,setUsername]= useState("");
    
    function handlechange(e){
        setUsername(e.target.value);
    }
  
  return (
    <div className='flex flex-col h-screen  justify-center items-center'>
        <h1 className='text-2xl my-5 uppercase'>Live server:{username}</h1>
        <input  type="text" className='border border-x-0 border-t-0 
        outline-0 p-3' placeholder='Enter the Username' onChange={handlechange} value={username} />

    </div>
  )
}

export default Question4