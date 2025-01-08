import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Layout.js';
import Home from './pages/Home.js';
import Electronics from './pages/Electronics.js';
import Clothes from './pages/Clothes.js';
import ProductDetails from './pages/ProductDetails.js';
import Cart from "./pages/Cart.js"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/clothes' element={<Clothes />} />
          <Route path='/product-detail/:product_id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/electronics' element={<Electronics />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
