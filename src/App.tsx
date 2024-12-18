import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CategoryNav } from './components/layout/CategoryNav';
import { Home } from './pages/Home';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { CategoryPage } from './pages/category/CategoryPage';
import { SellerDashboard } from './pages/seller/SellerDashboard';
import { NewProduct } from './pages/seller/NewProduct';
import { CreateListing } from './pages/seller/CreateListing';
import { ProductPage } from './pages/product/ProductPage';
import { ProfileSettings } from './pages/profile/ProfileSettings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <CategoryNav />
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/seller/dashboard" element={<SellerDashboard />} />
            <Route path="/seller/products/new" element={<NewProduct />} />
            <Route path="/seller/listings/create" element={<CreateListing />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/profile" element={<ProfileSettings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;