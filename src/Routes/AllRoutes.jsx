import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import DetailToGoInfo from "../Pages/DetailToGoInfo"
// import Login from "../Pages/Login";
// import Cart from "../Pages/Cart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="/detailgotoinfo/:id" element={<DetailToGoInfo />}>
        DetailToGoInfo
      </Route>
    </Routes>
  );
};
export default AllRoutes;
