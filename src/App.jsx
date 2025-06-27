import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';  
import ForgotPasswordPage from './pages/auth/forgotPassword';
import NotFound from './pages/404';
import ProductPage from './pages/products';
import DetailProductPage from './pages/detailProduct';
import CheckoutPage from './pages/checkout';
import OrderConfirmPage from './pages/orderConfirm';
import DashboardPage from './pages/dashboard';
import ManageProductsPage from './pages/dashboard/products';
import ManageOrdersPage from './pages/dashboard/orders';
import ManagePromoPage from './pages/dashboard/promo';
import ManageReviewsPage from './pages/dashboard/reviews';
import ManageUsersPage from './pages/dashboard/users';

function App() {

  return (
    <Router basename="/e-commerce">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<DetailProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment-confirmation" element={<OrderConfirmPage />} />
      
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/dashboard/products' element={<ManageProductsPage />} />
        <Route path='/dashboard/orders' element={<ManageOrdersPage />} />
        <Route path='/dashboard/promo' element={<ManagePromoPage />} />
        <Route path='/dashboard/reviews' element={<ManageReviewsPage />} />
        <Route path='/dashboard/admin' element={<ManageUsersPage />} />

        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
