import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Cart from "./pages/Cart"
import Header from "./component/header/Header"
import Singleproduct from "./component/Singleproduct/Singleproduct"
import BuyNow from "./component/buyNow/BuyNow"

function App() {
 
  return (
    <>
    <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="buynow" element={<BuyNow />} />
      <Route path="singleproduct/:id" element={<Singleproduct />}/>
    </Routes>
    </>
  )
}

export default App
