import React, { useEffect, useState } from 'react'

function Question11() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        console.log(data);
        
      })
      .catch((err) => console.error("Fetching data problem:", err));
  }, []);
    

  return (
    <div className='mx-6'> 
    <h1 className='text-center my-8 text-5xl font-extrabold'>Products</h1>
        <div className='grid lg:grid-cols-3 lg:container lg:mx-48 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-y-10 '>
        {products.map((item)=>(

            <div key={item.id} className='w-[300px] bg-amber-50 border rounded-2xl shadow-2xl shadow-gray-400 '>
            <img className='w-2xs h-80' src={item.images[0]} alt={item.title} />
            <div className='mx-3 mb-6'>
             <h1 className='text-2xl font-extrabold'>{item.title}</h1>
             <h2>BRAND: {item.brand}</h2>
             <h2>PRICE: ${item.price}</h2>
             <h1>AVAILABLELITY: {item.availabilityStatus}</h1>
             </div>
             </div>
        ))}
        </div>
       
    </div>
  )
}

export default Question11