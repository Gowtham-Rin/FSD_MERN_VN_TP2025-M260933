import React, { useState } from "react";


function Question8() {

    const Products = [
    {name:"Laptop",categary:"Electronics"},
    {name:"T-shirt",categary:"cloths"},
{name:"Headphones",categary:"Electronics"},
{name:"jeans",categary:"cloths"},
{name:"Smartphones",categary:"Electronics"}];

const [filter,setfilter] =useState("All");

const Filtercategary = 
filter === "All" ?   
 Products : Products.filter((items)=>items.categary === filter );  
  

  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen ">
        <h1 className="text-4xl uppercase my-6">Products Lists</h1>
        <div className="flex gap-5">
            <button onClick={()=>setfilter('All')}  className="border-0 px-4 py-3 rounded-2xl bg-blue-400 text-white ">All</button>
            <button onClick={()=>setfilter('Electronics')} className="border-0 px-4 py-3 rounded-2xl  bg-blue-400 text-white">Electronics</button>
            <button onClick={()=>setfilter('cloths')} className="border-0 px-4 py-3 rounded-2xl  bg-blue-400 text-white">cloths</button>
        </div>
   
    <div className="my-6">
        {Filtercategary.map((p,i)=>(
           <ul>
            <li key={i} className="text-2xl my-3"> {p.name}- {""} <span className="text-[16px]">{p.categary}</span></li>
           </ul> 
        ))}
    </div>
     </div>

    </>
     
  );
}

export default Question8;
