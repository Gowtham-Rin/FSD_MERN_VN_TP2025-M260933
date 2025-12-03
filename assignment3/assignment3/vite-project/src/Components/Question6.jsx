import React from 'react'

function Question6() {
  const Products = [
    {id:"1",name:"Neckless",price:"78,000rs" },
    {id:"2",name:"Royal Enfild",price:"2,60,000rs"},
     {id:"3",name:"laptop",price:"60,000rs"},
      {id:"4",name:"Iphone",price:"1,60,000rs"},
]

  return (
    <div className='w-full h-screen'>
       <h1 className='absolute left-150 top-36 text-4xl uppercase text-center'>Product Lists</h1>
       <div className='flex justify-center items-center h-screen' >
        <table className='w-[800px] border h-70' >
           <tr className='border'>
            <th className='border text-3xl'>ID</th>
            <th className='border text-3xl'>Name</th>
            <th className='border text-3xl'>Products</th>
            </tr> 
            {Products.map((p,i)=>(
                <tr key={i}>
                    <td className='border text-center text-2xl'>{p.id}</td>
                    <td className='border text-left px-3 text-1xl'>{p.name}</td>
                    <td className='border text-center text-1xl '>{p.price}</td>
                </tr>
            ))}
        </table>
       </div>

    </div>
  )
}

export default Question6