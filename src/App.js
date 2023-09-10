import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';

import ProductDetail from './pages/productDetail/ProductDetail'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories } from './redux/categorySlice';
import Collection from './pages/collection/Collection';
import Payments from './components/payments/Payments';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories())

  }, [])



  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:categoryId?' element={<Collection />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path='/payment/:status' element={<Payments />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
