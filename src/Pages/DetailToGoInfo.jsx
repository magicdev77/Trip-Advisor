/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useState } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer/FooterAllPage";
import NavbarDetail from "../Components/Navbar/NavbarDetail";
import ToGoTitle from "../Components/Title/ToGoTitle";
import ImageDetailBox from "../Components/ImageDetailBox/ImageDetailBox";
import About from "../Components/About/About";
import EssentialDo from "../Components/EssentialDo/EssentialDo";
import EssentialStay from "../Components/EssentialStay/EssentialStay";
import EssentialEat from "../Components/EssentialEat/EssentialEat";
import Itineraries from "../Components/ItinerariesSection/Itineraries";
import NextTrip from "../Components/DetailNextTrip/NextTrip";
import Dig from "../Components/DigSection/Dig";
import ExploreSee from "../Components/ExploreSeeSection/ExploreSee";
import ExplorePicture from "../Components/ExplorePictureSection/ExplorePicture";
import ExplorePop from "../Components/ExplorePopSection/ExplorePop";
import GetOutThere from "../Components/GetOutThereSection/GetOutThere";

const DetailToGoInfo = () => {
  const path = window.location.pathname.split("/");
  const [specifyData, setSpecifyData] = useState({});

  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/appr5GAnGqfUeqMQc/togo_places?api_key=key7diInu3GgCLrlb"
    )
      .then((res) => res.json())
      .then((rows) => {
        rows.records.map((e) => {
          if (e.id === path[2]) {
            setSpecifyData(e);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(specifyData);

  return (
    <>
      <Header />
      <main>
        {specifyData && specifyData.fields && <ToGoTitle title={specifyData.fields.Title}/>}
        <NavbarDetail />
        {specifyData && specifyData.fields && <ImageDetailBox data={specifyData}/>}
        {specifyData && specifyData.fields && <About data={specifyData} />}
        {specifyData && specifyData.fields && <EssentialDo data={specifyData} />}
        {specifyData && specifyData.fields && <EssentialStay data={specifyData} />}
        {specifyData && specifyData.fields && <EssentialEat data={specifyData} />}
        {specifyData && specifyData.fields && <Itineraries data={specifyData} />}
        <NextTrip />
        {specifyData && specifyData.fields && <Dig data={specifyData} />}
        {specifyData && specifyData.fields && <ExploreSee data={specifyData} />}
        {specifyData && specifyData.fields && <ExplorePicture data={specifyData} />}
        {specifyData && specifyData.fields && <ExplorePop data={specifyData} />}
        <GetOutThere />
      </main>
      <Footer />
    </>
  );
};

export default DetailToGoInfo;
