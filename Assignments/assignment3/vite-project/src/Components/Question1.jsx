import React from 'react'

function Question1() {
  
  const Students = [
    {name : "Virat", Department : "B.tech", year : "Final year"},
    {name: "Manthana", Department : "B.sc", year : "Second year"},
    {name:"Rohit", Department : "Mechanical", year:"Final Year"},
    {name:"Harshitha", Department : "B.tech", year:"Third year"},
    {name : "Harman", Department:"Bsc.M", year:"First year"}
  ];


  return (
    <div className=' h-screen bg-[#edecee] mx-5 my-4 flex gap-5 p-5 flex-wrap lg:justify-content-center lg:items-center '>
      {Students.map((student, index) => (
        <div className='p-4 text-2xl w-[270px] h-[300px] bg-[#f8f8f8]  ' key={index}>
          <h1 className='text-3xl text-cyan-900 uppercase text-center py-3'>
            Students Card
          </h1>
          <h1 className='my-1.5'>Name : {student.name}</h1>
          <h2 className='my-1.5'>Departments : {student.Department}</h2>
          <h2 className='my-1.5'>Year : {student.year}</h2>
        </div>
      ))}
    </div>
  )


}

export default Question1
