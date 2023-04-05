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
import TopExperience from "../Components/TopExperience/TopExperience";
// import { AuthContext } from "../Context/AuthContext/AuthContext";

import React, { useEffect } from "react";
// import axios from "axios";
import { useState } from "react";
// import { SearchContext } from "../Context/SearchContext/SearchContext";
// import { Center } from "@chakra-ui/react";

// let search = "lucknow";

const Home = () => {
  const [toGoData, setToGoData] = useState([]);
  const [topDestinationData, setTopDestinationData] = useState([]);
  const [topExperienceData, seetTopExperienceData] = useState([]);
  // const { token, setToken } = useContext(AuthContext);

  // console.log(token, setToken);

  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/appr5GAnGqfUeqMQc/togo_places?api_key=key7diInu3GgCLrlb"
    )
      .then((res) => res.json())
      .then((rows) => {
        setToGoData(rows.records);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch(
      "https://api.airtable.com/v0/appr5GAnGqfUeqMQc/top_destinations?api_key=key7diInu3GgCLrlb"
    )
      .then((res) => res.json())
      .then((rows) => {
        setTopDestinationData(rows.records);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch(
        "https://api.airtable.com/v0/appr5GAnGqfUeqMQc/top_experience?api_key=key7diInu3GgCLrlb"
      )
        .then((res) => res.json())
        .then((rows) => {
          seetTopExperienceData(rows.records);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return (
    <>
      <Header />
      <main>
        <NavbarDetail />
        <Search />
        <ThingsToDo data={toGoData} />
        <TopExperience data={topExperienceData} />
        <NextTrip />
        <MoreToExplore />
        <TopDestinations data={topDestinationData} />
        <img src={img1} style={{ width: "100%" }} />
      </main>
      <Footer />
    </>
  );
};
export default Home;
