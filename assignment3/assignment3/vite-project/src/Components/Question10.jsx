import React from 'react'
import Products from '../Components/Data.json'

function Question10() {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
        <h1 className='text-2xl uppercase'>Product List</h1>
        
            {
                Products.map((item)=>(
                    <div key={item.id} className='border p-3.5 my-6 w-40' >
                   <h1 >{item.name}</h1>
                   <h2> price: {item.price}</h2>
                   </div>
                   
                ))
            }
       
        
    </div>
  )
}

export default Question10 