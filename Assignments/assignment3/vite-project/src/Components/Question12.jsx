import React, { useEffect, useState } from 'react'

function Question12() {
   
    const [products,setproducts] = useState([]);
    const [loading,setloading] = useState(true);
    const[Error,setError] = useState (false);


    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((res)=> res.json())
        .then((data)=> {
            setproducts(data.products);
            setloading(false);
            console.log(data);
            
        
    })
        .catch(()=> { 
          setloading(true);
          setError(true)
        });
    },[])

if (loading) return <h1>Loading....</h1>;

if (Error) return <h1>Error loading data</h1>;


  return (
    <div className='mx-8'>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-14'>
           
                {products.map((item)=> (
                     <div key={item.id} className='mx-3 w-70 h-90 bg-gray-400 '>
                        <img className='w-50 mx-4' src={item.images} alt={item.title} />
                      <h1 className='mx-2.5 text-2xl font-extrabold'>NAME : {item.title}</h1>
                      <h2 className='mx-2.5'>BRAND : {item.brand}</h2>
                      <h2 className='mx-2.5'>PRICE : {item.price}</h2>
                     </div>
                ))}
           
        </div>
    </div>
  )
}

export default Question12