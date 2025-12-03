import React, { useState } from 'react'

function Question5() {
   
    const[username,setusername] =useState("");
    const[userEmail,setuserEmail] = useState("");

    const[submitedname,setsubmitedname] = useState("");
    const[submitedemail,setsubmitedemail] = useState("");

  const handlestore = (e)=>{
   
       e.preventDefault();
     setsubmitedemail(userEmail);
     setsubmitedname(username);

  }

  return (
    < >
    <div className='flex justify-center items-center flex-col h-screen'>
    <div className=''>
        <form action="" onSubmit={handlestore}>
            <label htmlFor="name" className=' mx-2 py-1'>Name:</label>
            <input type="text" onChange={(e) => setusername(e.target.value)} value={username} className=' w-75 border border-x-0 border-t-0 mx-2 outline-0 py-3'/> <br />
            <label htmlFor="Email" className='mx-2 py-1'>Email:</label>
            <input type="email" onChange={(e) => setuserEmail(e.target.value)}  value={userEmail} className=' w-75 border border-x-0 border-t-0 mx-2 outline-0 py-3' /> <br />
            <input type="submit" className=' w-40 border my-5 px-4 py-3 rounded-2xl bg-green-500 
            border-none flex justify-center items-center text-white hover:bg-green-600 transition duration-200 '/>
        </form>
    </div>
    <div>
        <h1 className='text-2xl text-center my-4 '>Submitted Data</h1>
        <p className='capitalize'><strong className='px-2'>Name:</strong>{submitedname}</p>
        <p><strong className='px-2'>Email:</strong>{submitedemail}</p>
    </div>
    </div>
    </>
  )
}

export default Question5