import React from 'react'
import { Link } from 'react-router-dom';
import { IoStarSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartSlice';
const Products = ({ men, women, jewelery, electronic }) => {
  const dispatch=useDispatch()
  const cart=useSelector((state)=>state.cart.cartData)

    return (
    <div>

      {/* <!-- men --> */}
      <div>
        <h1 className='font-semibold text-2xl mt-2  ml-28 text-gray-800'>Men's clothing</h1>
        <div className='min-h-[70vh] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   max-w-6xl mx-auto p-3'>
          {
            men.map((men) => (

                  <div key={men.id} className='group flex flex-col items-center border-2 border-red-800 gap-3 p-4 h-[360px] mt-2 ml-5 rounded-xl'>
                  <div className='h-[180px]'>
              <Link to={`singleproduct/${men.id}`}>
                    <img src={men.image} alt={men.title} className='w-full h-full object-cover' />
                </Link>
                    <h1 className='w-40 truncate mt-3 text-gray-700 font-bold text-lg'>{men.title}</h1>
                    <div className='flex flex-col items-center justify-center'>
                      <div className='flex items-center justify-around'>
                        <div className='flex items-center bg-green-700 text-white  font-semibold rounded-md p-0.5'>
                          <p ><span>{men.rating.rate}</span></p>
                          <IoStarSharp />
                        </div>
                        <p className='text-md font-light'>{men.rating.count}</p>
                      </div>
                      <p className='font-semibold text-lg text-gray-600'>${men.price}</p>
                    </div>
                    <div className='flex items-center justify-center w-full mt-2'>
                      <button onClick={cart.some((item)=>item.id === men.id ) ? ()=>dispatch(removeFromCart(men.id)) : ()=>dispatch(addToCart(men))  } className='bg-red-950 text-white border-2 rounded-lg p-2'>
                      {
                        cart.some((item)=>item.id === men.id ) ? "remove from cart" : "add to cart"  
                      }
                        </button>
                    </div>

                  </div>
              </div>
            ))
          }
        </div>
      </div>


      {/* <!-- women --> */}
      <div>
        <h1 className='font-semibold text-2xl mt-2  ml-28 text-gray-800'>Women's clothing</h1>
        <div className='min-h-[70vh] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-w-6xl mx-auto p-3'>
          {
            women.map((women) => (

              <div key={women.id} className='group flex flex-col items-center border-2 border-red-800 gap-3 p-4 h-[360px] mt-2 ml-5 rounded-xl'>
                  <div className='h-[180px]'>
                <Link to={`singleproduct/${women.id}`}>
                    <img src={women.image} alt={women.title} className='w-full h-full object-cover' />
                </Link>
                    <h1 className='w-40 truncate mt-3 text-gray-700 font-bold text-lg'>{women.title}</h1>
                    <div className='flex flex-col items-center justify-center'>
                      <div className='flex items-center justify-around'>
                        <div className='flex items-center font-semibold bg-green-700 text-white rounded-md p-0.5'>
                          <p><span>{women.rating.rate}</span></p>
                          <IoStarSharp />
                        </div>
                        <p className='text-md font-extralight'>{women.rating.count}</p>
                      </div>
                      <p className='font-semibold text-lg text-gray-600'>${women.price}</p>
                    </div>
                    <div className='flex items-center justify-center w-full mt-2'>
                      <button  onClick={cart.some((item)=>item.id === women.id ) ? ()=>dispatch(removeFromCart(women.id)) : ()=>dispatch(addToCart(women))  }  className='bg-red-950 text-white border-2 rounded-lg p-2'>
                       {
                        cart.some((item)=>item.id === women.id ) ? "remove from cart" : "add to cart"  

                       }
                        </button>
                    </div>

                  </div>
              </div>
            ))
          }
        </div>
      </div>



      {/* <!-- jewelery --> */}
      <div>
        <h1 className='font-semibold text-2xl mt-5  ml-28 text-gray-800'>Jewelery</h1>
        <div className='min-h-[70vh] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-w-6xl mx-auto p-3'>
          {
            jewelery.map((jewelery) => (

              <div key={jewelery.id} className='group flex flex-col items-center border-2 border-red-800 gap-3 p-4 h-[360px] mt-2 ml-5 rounded-xl'>
                  <div className='h-[180px]'>
                <Link to={`singleproduct/${jewelery.id}`}>
                    <img src={jewelery.image} alt={jewelery.title} className='w-full h-full object-cover' />
                </Link>
                    <h1 className='w-40 truncate mt-3 text-gray-700 font-bold text-lg'>{jewelery.title}</h1>
                    <div className='flex flex-col items-center justify-center'>
                      <div className='flex items-center justify-around'>
                        <div className='flex items-center font-semibold bg-green-700 text-white rounded-md p-0.5'>
                          <p><span>{jewelery.rating.rate}</span></p>
                          <IoStarSharp />
                        </div>
                        <p className='text-md font-extralight'>{jewelery.rating.count}</p>
                      </div>
                      <p className='font-semibold text-lg text-gray-600'>${jewelery.price}</p>
                    </div>
                    <div className='flex items-center justify-center w-full mt-2'>
                    <button  onClick={cart.some((item)=>item.id === jewelery.id ) ? ()=>dispatch(removeFromCart(jewelery.id)) : ()=>dispatch(addToCart(jewelery))  }  className='bg-red-950 text-white border-2 rounded-lg p-2'>
                       {
                        cart.some((item)=>item.id === jewelery.id ) ? "remove from cart" : "add to cart"  

                       }</button>
                </div>

                  </div>
              </div>
            ))
          }
        </div>
      </div>




      {/* <!-- electonic --> */}
      <div>
        <h1 className='font-semibold text-2xl mt-2  ml-28 text-gray-800'>Electronics</h1>
        <div className='min-h-[70vh] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-w-6xl mx-auto p-3'>
          {
            electronic.map((electonic) => (

              <div key={electonic.id} className='group flex flex-col items-center border-2 border-red-800 gap-3 p-4 h-[360px] mt-2 ml-5 rounded-xl'>
                  <div className='h-[180px]'>
                <Link to={`singleproduct/${electonic.id}`}>
                    <img src={electonic.image} alt={electonic.title} className='w-full h-full object-cover' />
                </Link>
                    <h1 className='w-40 truncate mt-3 text-gray-700 font-bold text-lg'>{electonic.title}</h1>
                    <div className='flex flex-col items-center justify-center'>
                      <div className='flex items-center justify-around'>
                        <div className='flex items-center font-semibold bg-green-700 text-white rounded-md p-0.5'>
                          <p><span>{electonic.rating.rate}</span></p>
                          <IoStarSharp />
                        </div> 
                        <p className='text-md font-extralight'>{electonic.rating.count}</p>
                      </div>
                      <p className='font-semibold text-lg text-gray-600'>${electonic.price}</p>
                    </div>
                    <div className='flex items-center justify-center w-full mt-2'>
                    <button  onClick={cart.some((item)=>item.id === electonic.id ) ? ()=>dispatch(removeFromCart(electonic.id)) : ()=>dispatch(addToCart(electonic))  }  className='bg-red-950 text-white border-2 rounded-lg p-2'>
                       {
                        cart.some((item)=>item.id === electonic.id ) ? "remove from cart" : "add to cart"  

                       }</button>
                </div>

                  </div>
              </div>
            ))
          }
        </div>
      </div>

    </div>

  )
}

export default Products