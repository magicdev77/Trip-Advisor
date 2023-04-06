/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useState } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer/FooterAllPage";
import NavbarDetail from "../Components/Navbar/NavbarDetail";
import ToGoTitle from "../Components/Title/ToGoTitle";

const DetailToGoInfo = () => {
  const path = window.location.pathname.split("/");
  const [specifyData, setSpecifyData] = useState({});

  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/appr5GAnGqfUeqMQc/togo_places?api_key=key7diInu3GgCLrlb"
    )
      .then((res) => res.json())
      .then((rows) => {
        console.log(rows.records);
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

  return (
    <>
      <Header />
      <main>
        {specifyData && specifyData.fields && <ToGoTitle title={specifyData.fields.Title}/>}
        <NavbarDetail />
      </main>
      <Footer />
    </>
  );
};

export default DetailToGoInfo;
