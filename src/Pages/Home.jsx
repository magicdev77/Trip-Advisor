/* eslint-disable jsx-a11y/alt-text */
import Footer from "../Components/Footer/FooterAllPage";
// import Trending from "../Components/Trending/Trending";
import MoreToExplore from "../Components/MoreToExplore/MoreToExplore";
import TopDestinations from "../Components/TopDestinations/TopDestinations";
import NavbarDetail from "../Components/Navbar/NavbarDetail";
import Search from "../Components/Search";
import ThingsToDo from "../Components/ThingsToDo/ThingsToDo";
import Header from "../Components/Header";
import img1 from "../Components/tripadvisor.png";
import NextTrip from "../Components/NextTrip/NextTrip";
import { AuthContext } from "../Context/AuthContext/AuthContext";

import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useState } from "react";
// import { SearchContext } from "../Context/SearchContext/SearchContext";
// import { Center } from "@chakra-ui/react";

let search = "lucknow";

const Home = () => {
  const [data, setData] = useState([]);
  const { token, setToken } = useContext(AuthContext);

  console.log(token, setToken);

  useEffect(() => {
    axios
      .get(`https://my-jsih.herokuapp.com/destinations`)
      .then((res) => setData(res.data[search]));
  }, []);

  return (
    <>
      <Header />
      <main>
        <NavbarDetail />
        <Search />
        <ThingsToDo data={data} />
        <NextTrip />
        <MoreToExplore />
        <TopDestinations />
        <img src={img1} style={{ width: "100%" }} />
        {/* <Trending /> */}
      </main>
      <Footer />
    </>
  );
};
export default Home;
