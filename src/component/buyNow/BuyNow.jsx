import React from 'react'
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';

const BuyNow = () => {
  console.log("hello");
  return (
    <div className='min-h-[80vh] flex flex-col items-center justify-center'>

      <TiTick className='text-red-800 h-60 text-8xl' />
      <h1 className='font-bold text-red-800 text-xl'>SUCCESS</h1>
      <div className='flex flex-col items-center font-semibold'>
        <p>We received your purchase request;</p>

        <p>we'll be in touch shortly!</p>
      </div>
      <Link to={"/"}>
      <button className='bg-red-950 text-white border-2 rounded-lg p-2 mt-2'>Back To Home</button>

      </Link>
    </div>
  )
}

export default BuyNow