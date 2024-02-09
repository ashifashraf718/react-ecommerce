import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Cart from "./pages/cart"
import Header from "./component/header/Header"
import Singleproduct from "./component/Singleproduct/Singleproduct"

function App() {
 
  return (
    <>
    <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="singleproduct/:id" element={<Singleproduct/>}/>
    </Routes>
    </>
  )
}

export default App
