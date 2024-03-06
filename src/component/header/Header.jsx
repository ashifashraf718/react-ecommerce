import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-around h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div>
            <img
              src="//www.zaappy.com/cdn/shop/files/logo1.png?v=1646306106"
              className="h-12"
            />
          </div>
        </Link>
        <div>
          <ul className="flex list-none items-center space-x-6 text-grey-800 font-semibold">
            <Link to={"/"}>
              <li className="cursor-pointer text-gray-800">Home</li>
            </Link>
            <Link to={"/cart"}>
              <li className="cursor-pointer text-gray-800">Cart</li>
            </Link>
            {/* <Link to={"/delivery"}>
              <button>delivery</button>
            </Link> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
