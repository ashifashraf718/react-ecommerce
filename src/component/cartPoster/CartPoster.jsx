import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

const CartPoster = (cartItem) => {
  const product = cartItem.cartItem;
  console.log("cartItem:", product);
  const dispatch = useDispatch();

  return (
    <div>
      {product.map((item) => (
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
              <h1 className="text-xl text-white font-bold">{item.title}</h1>
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
  );
};

export default CartPoster;
