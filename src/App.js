import {BrowserRouter, Routes, Route} from "react-router-dom"

import NavBar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import Home from "./views/Home/Home"
import Category from "./views/Category/Category"
import Product from "./views/Product/Product"
import Cart from "./components/Cart/Cart"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/category" element={<Category/>} />
        <Route exact path="/category/:categoryId" element={<Category/>} />
        <Route exact path="/product" element={<Product/>} />
        <Route exact path="/product/:productId" element={<Product/>} />
        <Route exact path="/cart" element={<Cart/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
