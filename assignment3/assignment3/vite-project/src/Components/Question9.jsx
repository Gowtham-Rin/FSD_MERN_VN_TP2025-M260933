import React, { useState } from 'react'

function Question9() {
  const Students = [
    "Hashi",
    "Gowtham",
    "Lokesh",
    "veera",
    "Mito",
    "Rin",
    "obito"
    
  ];

  const [query,setquery] = useState("");

  const Filterstd = Students.filter((name)=>name.toLowerCase().includes(query.toLowerCase()))
  

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-3xl uppercase'>Student Search</h1>
        <input type="text" className='p-3.5 my-2 w-2xs border-b outline-0 '
        placeholder='Search then student name'
        onChange={(e)=> setquery(e.target.value)}
        value={query}
         />
         <ul>
           {Filterstd.length > 0 ? (Filterstd.map((name ,i)=> 
           <li key={i}>{name}</li> )) : ( <p>No Matches Found</p>) }
            
           
         </ul>
    </div>
  )
}

export default Question9