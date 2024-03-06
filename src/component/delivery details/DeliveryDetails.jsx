import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeAllCart, removeFromCart } from "../../store/cartSlice";



const DeliveryDetails = () => {
  const [totalCart, setTotalCart] = useState(0);
  const dispatch = useDispatch();

  const state = useSelector((state) => state.cart.cartData);

  useEffect(() => {
    setTotalCart(state.reduce((acc, curr) => acc + curr.price, 0));
  }, [state]);
  console.log("state:", state);
  console.log("total: ", totalCart);
  function display() {
    dispatch(removeAllCart());
  }

  return (
    <div className="flex items-center justify-around  ">
      <div className="min-h-[80vh] flex flex-col items-center justify-around w-1/3  ml-10 text-gray-700 border mt-16 rounded-md">
        <div className="flex flex-col r w-3/4  justify-around">
          <h1 className="font-semibold text-lg">Contact information</h1>
          <div className="flex flex-col">
            <label htmlFor="">Email address</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md w-full h-7 p-1 text-sm"
             required/>
          </div>
        </div>

        <div className="flex flex-col r w-3/4  justify-around">
          <h1 className="font-semibold text-lg">Shipping Information</h1>
          <div className="flex w-full m-1">
            <div className="flex flex-col w-1/2">
              <label htmlFor="">First name</label>
              <input required
                type="text"
                className="border border-gray-300 rounded-md w-full h-7 p-1 text-sm"
              />
            </div>
            <div className="flex flex-col w-1/2 m-1">
              <label htmlFor="">Last name</label>
              <input required
                type="text"
                className="border border-gray-300 rounded-md w-full h-7 p-1 text-sm ml-1"
              />
            </div>
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="">Address</label>
            <input
              type="text" required
              className="border border-gray-300 rounded-md w-full h-7 p-1 text-sm"
            />
          </div>
          <div className="flex w-full m-1">
            <div className="flex flex-col w-1/3 m-1">
              <label htmlFor="">City</label>
              <input required
                type="text"
                name=""
                id=""
                className="border border-gray-300 rounded-md w-full h-7 p-1 text-sm"
              />
            </div>
            <div className="flex flex-col w-1/3 m-1">
              <label htmlFor="">State</label>
              <input required
                type="text"
                className="border border-gray-300 rounded-md w-full h-7 p-1 text-sm"
              />
            </div>
            <div className="flex flex-col w-1/3 m-1">
              <label htmlFor="">Postal code</label>
              <input required
                type="text"
                className="border border-gray-300 rounded-md w-full h-7 p-1 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col r w-3/4  justify-around ">
          <h1 className="font-semibold text-lg m-1">Payment</h1>
          <div className="flex m-2">
            <div className=" flex w-1/3">
              <input type="radio" name="pay" id="" className="m-1" />
              <label htmlFor="">Credit Card</label>
            </div>
            <div className=" flex w-1/3">
              <input  type="radio" name="pay" id="" className="m-1" />
              <label htmlFor="">PayPal</label>
            </div>
            <div className=" flex w-1/3">
              <input type="radio" name="pay" id="" className="m-1" />
              <label htmlFor="">eTransfer</label>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Card number</label>
            <input required
              type="text"
              className="border border-gray-300 rounded-md w-full h-7 p-1 text-sm"
            />
          </div>
          <div className="flex flex-col justify-around">
            <label htmlFor="">Name on Card</label>
            <input required
              type="text"
              className="border border-gray-300 rounded-md w-full h-7 p-1 text-sm"
            />
          </div>
          <div className="w-full flex">
            <div className="flex flex-col w-1/2 m-1 justify-around">
              <label htmlFor="">Expiration date (MM/YY) </label>
              <input required
                type="text"
                className="border border-gray-300 rounded-md w-full h-7 p-1 text-sm "
              />
            </div>
            <div className="flex flex-col w-1/2 m-1 justify-around">
              <label htmlFor="">cvc</label>
              <input required
                type="text"
                className="border border-gray-300 rounded-md w-full h-7 p-1 text-sm"
              />
            </div>
          </div>
        </div>
        <button className="bg-red-950 text-white border-2 rounded-lg p-2">
          pay
        </button>
      </div>




      <div>
        {/* <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto"> */}
          <div className="flex flex-col justify-center items-center p-3 mt-16">
            {state &&
              state.map((item) => (
                <div
                  className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl"
                  key={item.id}
                >
                  <div className="flex p-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-28 rounded-lg"
                    />
                    <div className="ml-10 self-start space-y-5">
                      <h1 className="text-xl text-white font-bold">
                        {item.title}
                      </h1>
                      <p className="text-white font-xl">$ {item.price}</p>
                      <div>
                        <button
                          onClick={() => {
                            dispatch(removeFromCart(item.id));
                            console.log("cart id :", item.id);
                          }}
                          className="bg-red-950 text-white border-2 rounded-lg p-2"
                        >
                          Remove From Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        {/* </div> */}
        <div className="w-[500px]">
          <div className="flex flex-col justify-center items-center p-5 space-y-5 mt-14">
            <h1 className="font-bold text-red-800 text-lg">
              Your Cart Summary
            </h1>
            <p>
              <span className="text-gray-800 font-bold">Total Item</span>
              <span className="text-gray-800 font-semibold">
                : {state.length}
              </span>
            </p>
            <p>
              <span className="text-gray-800 font-bold">Total Amount</span>
              <span className="text-gray-800 font-semibold">
                : ${totalCart}
              </span>
            </p>
            <Link to={"/buynow"}>
              <button
                onClick={display}
                className="bg-red-950 text-white border-2 rounded-lg p-2"
              >
                {" "}
                Buy Now
              </button>
            </Link>
          </div>
        </div>

        {/* <Cart/> */}
      </div>
    </div>
  );
};

export default DeliveryDetails;
