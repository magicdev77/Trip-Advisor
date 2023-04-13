/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";
import DirectorySection from "../Components/DirectorySection/Directory";
import NavbarDetail from "../Components/Navbar/NavbarDetail";
import Filter from "../Components/Filter/Filter";

const Directory = () => {
  const [viewData,setViewData] = useState([]);
  const [realData,setRealData] = useState([]);

  const queryParameters = new URLSearchParams(window.location.search);
  const option = queryParameters.get("option");
  const place = queryParameters.get("place");
  const minPrice = queryParameters.get("minPrice");
  const maxPrice = queryParameters.get("maxPrice");

  useEffect(() => {
    let data = []
    fetch(
      "https://api.airtable.com/v0/appr5GAnGqfUeqMQc/directory_page?api_key=key7diInu3GgCLrlb"
    )
      .then((res) => res.json())
      .then((rows) => {
        data = rows.records.filter((e) => ((option !== null ? e.fields.style === option : true) && (place !== 'all' ? e.fields.country === place : true) && (minPrice !== null ? e.fields.price >= minPrice : true) && (maxPrice !==null ? e.fields.price <= maxPrice : true)));
        
        setRealData(rows.records);
        setViewData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [queryParameters]);

  return (
    <>
      <div style={{ position: 'sticky', top: '0', zIndex: '100', background: 'white', boxShadow: '0px 0px 4px #333' }}>
        <Header />
        <NavbarDetail place={""}/>
        {realData && <Filter option={option} data={realData}/>}
      </div>
      <main>
        {viewData && <DirectorySection data={viewData}/>}
      </main>
      <Footer />
    </>
  );
};

export default Directory;
