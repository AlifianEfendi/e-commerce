import { Routes, Route } from "react-router-dom"
import LoginPage from "@pages/login";
import RegisterPage from "@pages/register"
import ProductsPage from "@pages/products";
import ErrorPage from "@pages/error";
import ProductPage from "@pages/product";

export default function App() {
  return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/store" element={<ProductsPage />} />
        <Route path="/product/:id" element={< ProductPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  )
}