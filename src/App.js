import {BrowserRouter, Routes, Route} from "react-router-dom"
import {CartProvider} from "./context/CartContext"

import NavBar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import Home from "./views/Home/Home"
import Category from "./views/Category/Category"
import Product from "./views/Product/Product"
import Cart from "./views/Cart/Cart"
import CheckOut from "./views/CheckOut/CheckOut"

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/category" element={<Category/>} />
          <Route exact path="/category/:categoryId" element={<Category/>} />
          <Route exact path="/product" element={<Product/>} />
          <Route exact path="/product/:productId" element={<Product/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/checkout" element={<CheckOut/>} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
