import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';



const Cart = () => {
  const [totalCart,setTotalCart]=useState(0)

  const state=useSelector((state)=>state.cart.cartData)
  
  useEffect(()=>{
    setTotalCart(state.reduce((acc,curr)=>acc + curr.price, 0))
  },[])
  console.log("state:",state);
  console.log("total: ",totalCart);
  return (
    <div>
      {/* {
        state.map((state)=>(
          <img src={state.image} alt="" />
        ))
      } */}
      
    </div>
  ) 
}

export default Cart