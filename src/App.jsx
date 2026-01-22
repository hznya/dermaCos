import { Routes, Route, Navigate } from "react-router-dom";

import MainPage from "./pages/MainPage.jsx";
import BodyWash from "./pages/BodyWash.jsx";
import BodyLotion from "./pages/BodyLotion.jsx";
import ProductHub from "./pages/ProductHub.jsx";

import BrandImage from "./pages/BrandImage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product" element={<ProductHub />} />
      <Route path="/product/bodywash" element={<BodyWash />} />
      <Route path="/product/bodylotion" element={<BodyLotion />} />
      <Route path="/BrandImage" element={<BrandImage />} />
      <Route path="/about" element={<BrandImage />} />

      {/* 없는 경로 처리 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}