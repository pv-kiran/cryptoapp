import { Route, Routes } from "react-router-dom";
// import { Suspense, lazy } from "react";

// const HomeLayout = lazy(() => import("./utils/HomeLayout"));
// const CryptoPage = lazy(() => import("./pages/CryptoPage"));
// const HundredCrypto = lazy(() => import("./components/HundredCrypto"));
// const CoinInfo = lazy(() => import("./pages/CoinInfo"));
// const About = lazy(() => import("./components/About"));

import HomeLayout from "./utils/HomeLayout";
import CryptoPage from "./pages/CryptoPage";
import HundredCrypto from "./components/HundredCrypto";
import About from "./components/About";
import CoinInfo from "./pages/CoinInfo";

function AppRoutes() {
  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<CryptoPage />}></Route>

          <Route path="top" element={<HundredCrypto />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="coin/:id" element={<CoinInfo />}></Route>
        </Route>
      </Routes>
      {/* </Suspense> */}
    </>
  );
}

export default AppRoutes;
