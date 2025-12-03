import React from 'react'

function Question3({name,role,image}) {
  return (
    <div className=''>
    <div className=' m-4 border-none  shadow-[0px_20px_30px_-10px_rgb(38,57,77)] bg-white rounded h-110 w-2xs p-5'>
        <div className=''>
        <img  className='h-70 w-2xs object-cover rounded-2xl' src={image}/>
        <h1 className='uppercase my-4 text-center text-3xl'> {name} </h1>
        <h2 className='uppercase my-4 text-center'>{role}</h2>
        </div>
    </div>
    </div>
  )
}

export default Question3