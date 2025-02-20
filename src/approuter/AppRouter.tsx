import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import { PegarVariaveis } from "../context/context";
import WithdrawPage from "../pages/WithdrawPage";
import DepositPage from "../pages/DepositPage";
import TransferPage from "../pages/TransferPage";
// import Header from "../components/Header";

export default function AppRouter() {
  return (
    <PegarVariaveis>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/options" element={<ProfilePage />} />
          <Route path="/withdraw" element={<WithdrawPage />} />
          <Route path="/deposit" element={<DepositPage />} />
          <Route path="/transfer" element={<TransferPage />} />
        </Routes>
      </BrowserRouter>
    </PegarVariaveis>
  );
}
