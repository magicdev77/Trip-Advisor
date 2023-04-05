import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import DetailInfo from "../Pages/DetailInfo"
// import Login from "../Pages/Login";
// import Cart from "../Pages/Cart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="/detailInfo/:id" element={<DetailInfo />}>
        DetailInfo
      </Route>
    </Routes>
  );
};
export default AllRoutes;
