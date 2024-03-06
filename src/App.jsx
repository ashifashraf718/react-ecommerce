import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Singleproduct from "./component/Singleproduct/Singleproduct";
import BuyNow from "./component/buyNow/BuyNow";
import DeliveryDetails from "./component/delivery details/DeliveryDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "buynow",
      element: <BuyNow />,
    },
    {
      path: "singleproduct/:id",
      element: <Singleproduct />,
    },
    {
      path: "delivery",
      element: <DeliveryDetails />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
