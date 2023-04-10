import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import DetailToGoInfo from "../Pages/DetailToGoInfo";
import Directory from "../Pages/Directory";
// import Login from "../Pages/Login";
// import Cart from "../Pages/Cart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="/detailgotoinfo/:userId" element={<DetailToGoInfo />}>
        DetailToGoInfo
      </Route>
      <Route path="/directory" element={<Directory />}>
        Directory
      </Route>
    </Routes>
  );
};
export default AllRoutes;
