import React, { useState } from 'react'

function Question2() {
  const [IslogginId,setIslogginId] = useState(false);

 function handleclick(){
    setIslogginId(!IslogginId);
 }

 


  return (
    <div  className='flex flex-col justify-center items-center h-screen'>
       <h1 className='text-3xl text-blue-400 text-shadow-blue-800 capitalize my-5'>{IslogginId ? "WelcomeBack😊!":"please Login🤌"}</h1>

       <button onClick={handleclick}  className='bg-green-400 my-5 border px-6 py-3 rounded-2xl hover:bg-green-500
        transition duration-200 focus:ring-2 focus:ring-green-400 active:bg-green-800 uppercase border-none'> {IslogginId ? "Logout":"Login"}</button>
    </div>
  )
}

export default Question2