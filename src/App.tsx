import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailPage from "./pages/EmailPage";
import OtpPage from "./pages/OtpPage";
import SubscribePage from "./pages/SubscribePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmailPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
      </Routes>
    </BrowserRouter>
  );
}