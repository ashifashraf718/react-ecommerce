import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartPoster from "../component/cartPoster/CartPoster";
import { removeAllCart } from "../store/cartSlice";
import Header from "../component/header/Header";

const Cart = () => {
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
    <div>
      <Header />
      {state && state.length ? (
        <div className="flex">
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              <CartPoster cartItem={state} />
            </div>
          </div>
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
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="font-bold text-gray-800 text-xl mb-2">
            Your Cart Is Empty
          </h1>
          <Link to={"/"}>
            <button className="bg-red-950 text-white border-2 rounded-lg p-2">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
