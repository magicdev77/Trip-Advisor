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
        setRealData(rows.records);
        // rows.records.map((e) => {
        //   if (place === 'all' && e.fields.style === option) {
        //     data.push(e);
        //   } else if (e.fields.country === place && e.fields.style === option) {
        //     data.push(e);
        //   }
        // });
        if (minPrice === null && maxPrice === null && place === 'all') {
          data = rows.records.filter((e) => (e.fields.style === option));
        } else if (minPrice === null && maxPrice === null && place !== 'all') {
          data = rows.records.filter((e) => (e.fields.style === option && e.fields.country === place));
        } else if (minPrice === null && maxPrice !== null && place === 'all') {
          data = rows.records.filter((e) => (e.fields.style === option && e.fields.price <= maxPrice));
        } else if (minPrice === null && maxPrice !== null && place !== 'all') {
          data = rows.records.filter((e) => (e.fields.style === option && e.fields.country === place && e.fields.price <= maxPrice));
        } else if (minPrice !== null && maxPrice === null && place === 'all') {
          data = rows.records.filter((e) => (e.fields.style === option && e.fields.price >= minPrice));
        } else if (minPrice !== null && maxPrice === null && place !== 'all') {
          data = rows.records.filter((e) => (e.fields.style === option && e.fields.country === place && e.fields.price >= minPrice));
        } else if (minPrice !== null && maxPrice !== null && place === 'all') {
          data = rows.records.filter((e) => (e.fields.style === option && e.fields.price >= minPrice && e.fields.price <= maxPrice));
        } else if (minPrice !== null && maxPrice !== null && place !== 'all') {
          data = rows.records.filter((e) => (e.fields.style === option && e.fields.country === place && e.fields.price >= minPrice && e.fields.price <= maxPrice));
        } 
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
