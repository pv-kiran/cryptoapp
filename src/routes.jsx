import { Route, Routes } from "react-router-dom";
import HomeLayout from "./utils/HomeLayout";
import Test from "./components/Test";
import New from "./components/New";
import About from "./components/About";
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Test></Test>}></Route>
          <Route path="new" element={<New></New>}></Route>
          <Route path="about" element={<About></About>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
