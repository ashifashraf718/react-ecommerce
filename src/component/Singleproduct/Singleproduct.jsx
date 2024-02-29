import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../header/Header";
import { IoStarSharp } from "react-icons/io5";
import { addToCart, removeFromCart } from "../../store/cartSlice";

const Singleproduct = () => {
  const data = useParams();
  console.log("data id", data);
  const product = useSelector((state) => state.product.productData[1]);
  console.log("products.......", product);
  const cart = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();

  const mapProduct = product.map((innerArr) => innerArr);
  console.log("map...... :", mapProduct);
  const merge = mapProduct.flat(Infinity);
  const singleProduct = merge.filter((li) => {
    return li.id == data.id;
  });
  console.log("single ", singleProduct);
  return (
    <div>
      <Header />
      <div>
        {singleProduct.map((li) => (
          <div
            key={li.id}
            className="min-h-[50vh] flex items-center justify-around mt-12"
          >
            <div className="h-1/2">
              <img src={li.image} className="h-96" alt="" />
            </div>
            <div className="w-1/2 ml-3 text-gray-700">
              <h1 className="font-bold  text-lg">~{li.title}~</h1>
              <p className="font-semibold ">{li.description}</p>
              <p className="font-bold text-xl">${li.price}</p>
              <div className="flex m-1">
                <div className="flex items-center bg-green-700 text-white w-11  font-semibold rounded-md p-0.5">
                  <p>
                    <span>{li.rating.rate}</span>
                  </p>
                  <IoStarSharp />
                </div>
                <p className="text-md font-light">{li.rating.count}</p>
              </div>
              <button
                onClick={
                  cart.some((item) => item.id === li.id)
                    ? () => dispatch(removeFromCart(li.id))
                    : () => dispatch(addToCart(li))
                }
                className="bg-red-950 text-white border-2  rounded-lg p-2"
              >
                {cart.some((item) => item.id === li.id)
                  ? "remove from cart"
                  : "add to cart"}
              </button>
              <Link to={"/cart"}>
                <button className="bg-red-950 text-white border-2  rounded-lg p-2">
                  Go To Cart
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Singleproduct;
