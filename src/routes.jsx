import { Route, Routes } from "react-router-dom";
import HomeLayout from "./utils/HomeLayout";
import About from "./components/About";
import CryptoPage from "./pages/CryptoPage";
// import CryptoTable from "./components/CryptoTable";
import HundredCrypto from "./components/HundredCrypto";
import CoinInfo from "./pages/CoinInfo";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<CryptoPage></CryptoPage>}></Route>
          <Route path="top" element={<HundredCrypto></HundredCrypto>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="coin/:id" element={<CoinInfo></CoinInfo>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
