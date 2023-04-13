/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";

import styles from "./Filter.module.css";

const cities = [
  { name: "United States", code: "United States" },
  { name: "Japan", code: "Japan" },
  { name: "United Kingdom", code: "United Kingdom" },
  { name: "Australia", code: "Australia" },
  { name: "Mexico", code: "Mexico" },
  { name: "Iceland", code: "Iceland" },
];

const Filter = ({ option, data }) => {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [currentMinPrice, setCurrentMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [currentMaxPrice, setCurrentMaxPrice] = useState(0);
  const [avePrice, setAvePrice] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (data.length) {
      let max = data[0].fields.price;
      let min = data[0].fields.price;
      let sum = 0;
      data.map((e) => {
        if (e.fields.price > max) {
          max = e.fields.price;
        }

        if (e.fields.price < min) {
          min = e.fields.price;
        }

        sum = sum + e.fields.price;
      });
      setMaxPrice(max);
      setMinPrice(min);
      setAvePrice(parseInt((sum / data.length) * 100) / 100);
    }
  }, [data]);

  const handleOkClick = () => {
    setVisible(false);
    navigate(
      `/directory/?option=${option}&place=${
        selectedCountry ? selectedCountry.name : "all"
      }&minPrice=${
        currentMinPrice === 0 ? minPrice : currentMinPrice
      }&maxPrice=${currentMaxPrice === 0 ? maxPrice : currentMaxPrice}`
    );
  };

  const handleRefreshClick = () => {
    setCurrentMinPrice(minPrice);
    setCurrentMaxPrice(maxPrice);
    setSelectedCountry(null);
    setVisible(false);
    navigate(
      `/directory/?option=${option}&place=all`
    );
  };

  return (
    <div className={styles.container}>
      <div>
        <div>
          <SearchIcon />
        </div>
        <div>
          <input
            type="text"
            placeholder="search ..."
            // onKeyDown={(e) => setSearch(e.target.value.trim())}
          />
        </div>
      </div>
      <button className={styles.filterBtn} onClick={() => setVisible(true)}>
        <i
          className="pi pi-sliders-h"
          style={{ fontSize: "12px", marginRight: "5px" }}
        ></i>
        <span>Filters</span>
      </button>
      <Dialog
        header="Filter"
        footer={
          <div className="w-full">
            <Button
              label="Refresh"
              icon="pi pi-refresh"
              size="small"
              style={{ float: "left" }}
              onClick={handleRefreshClick}
            />
            <Button
              label="Ok"
              icon="pi pi-check"
              size="small"
              style={{}}
              onClick={handleOkClick}
            />
            <Button
              label="Cancel"
              icon="pi pi-times"
              size="small"
              onClick={() => setVisible(false)}
            />
          </div>
        }
        visible={visible}
        style={{ width: "800px" }}
        onHide={() => setVisible(false)}
      >
        <h3>Price range</h3>
        <p>The average price per night is ${avePrice}$</p>
        <div className={styles.filterBox}>
          <InputNumber
            value={currentMinPrice !== 0 ? currentMinPrice : minPrice}
            onValueChange={(e) => setCurrentMinPrice(e.value)}
            showButtons
            mode="currency"
            currency="USD"
          />
          <div />
          <InputNumber
            value={currentMaxPrice !== 0 ? currentMaxPrice : maxPrice}
            onValueChange={(e) => setCurrentMaxPrice(e.value)}
            showButtons
            mode="currency"
            currency="USD"
          />
        </div>
        <h3>Country</h3>
        <div className={styles.filterDropBox}>
          <Dropdown
            value={selectedCountry}
            options={cities}
            optionLabel="name"
            editable
            showClear
            placeholder="Select a Country"
            onChange={(e) => setSelectedCountry(e.value)}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default Filter;
