import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import HomePage from './landing_page/home/HomePage';
import SignupPage from './landing_page/signup/SignupPage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductsPage from './landing_page/products/ProductsPage';
import SupportPage from './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound';
import Login from "./landing_page/Login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<SignupPage/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/product" element={<ProductsPage/>}></Route>
      <Route path="/pricing" element={<PricingPage/>}></Route>
      <Route path="/support" element={<SupportPage/>}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);

