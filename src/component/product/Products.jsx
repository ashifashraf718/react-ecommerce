import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Products = ({ value }) => {
  

  console.log("products...", value.category);

  // const mensCloth = value.filter((value) => {
  //   return value.category == "men's clothing"
  // })

  // console.log('mensCloth : ', mensCloth);

  // const jewelery = value.filter((value) => {
  //   return value.category == "jewelery"
  // })
  // console.log("jewelery : ",jewelery);

  // const electronics=value.filter((value)=>{
  //   return value.category=="electronics"
  // })

  // console.log("electronics",electronics);
  
  // const womensClothing=value.filter((value)=>{
  //   return value.category=="women's clothing"
  // })

  // console.log("women : ",womensClothing);
  return (
    <div>
    
      {/* <div className='min-h-[80vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-5  max-w-6xl mx-auto p-3'>
        {mensCloth?   <>  
      {
      
        mensCloth.map((men) => (
          <>
          <Link to={`singleproduct/${men.id}`}> <div className='group flex flex-col items-center border-2 border-red-800 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl'>
              <div className='h-[180px]'>
                <img src={men.image} alt={men.title} className='w-full h-full object-cover' />
              </div>
            </div>
            </Link>
          </>
        )) 
      }
</>:null}


      {
        jewelery.map((jewelery)=>(
          <>
            <div className='group flex flex-col items-center border-2 border-red-800 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl'>
              <div className='h-[180px]'>
                <img src={jewelery.image} alt={jewelery.title} className='w-full h-full object-cover' />
              </div>
            </div>
          </>
        ))
      }
      {
        electronics.map((electronics)=>(
          <>
            <div className='group flex flex-col items-center border-2 border-red-800 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl'>
              <div className='h-[180px]'>
                <img src={electronics.image} alt={electronics.title} className='w-full h-full object-cover' />
              </div>
            </div>
          </>
        ))
      }

      
      {
        womensClothing.map((women)=>(
          <>
            <div className='group flex flex-col items-center border-2 border-red-800 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl'>
              <div className='h-[180px]'>
                <img src={women.image} alt={women.title} className='w-full h-full object-cover' />
              </div>
            </div>
          </>
        ))
      }

      </div> */}





            <div className='group flex flex-col items-center border-2 border-red-800 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl'>
              <div className='h-[180px]'>
                {
                  value.category == "men's clothing" ? 
                  <>
                  <img src={value.image} alt={value.title} className='w-full h-full object-cover' /> 
                  </>: value.category=="women's clothing"
                  ?
                  <>
                   <img src={value.image} alt={value.title} className='w-full h-full object-cover' /> 
                   </> : null
                  
                }
                
              </div>
            </div>


   
    </div>

  

  

    


    
  )
}

export default Products