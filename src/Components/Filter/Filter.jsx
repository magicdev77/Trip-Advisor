import React, { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { BiFilter } from "react-icons/bi";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";

import styles from "./Filter.module.css";

const cities = [
  { name: 'United States', code: 'United States' },
  { name: 'Japan', code: 'Japan' },
  { name: 'United Kingdom', code: 'United Kingdom' },
  { name: 'Australia', code: 'Australia' },
  { name: 'Mexico', code: 'Mexico' },
  { name: 'Iceland', code: 'Iceland' }
];

const Filter = () => {
  const [visible, setVisible] = useState(false);
  const [currency1, setCurrency1] = useState(0);
  const [currency2, setCurrency2] = useState(0);
  const [selectedCity, setSelectedCity] = useState(null);

  // const handleOpenModal = () => {
  //   setIsOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsOpen(false);
  // };

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
        <BiFilter />
        <span>Filters</span>
      </button>
      <Dialog
        header="Filter"
        footer={
          <div className="w-full">
            <Button
              label="Ok"
              icon="pi pi-check"
              size="small"
              onClick={() => setVisible(false)}
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
        <p>The average price per night is 177$</p>
        <div className={styles.filterBox}>
          <InputNumber
            value={currency1}
            onValueChange={(e) => setCurrency1(e.value)}
            showButtons
            mode="currency"
            currency="USD"
          />
          <div />
          <InputNumber
            value={currency2}
            onValueChange={(e) => setCurrency2(e.value)}
            showButtons
            mode="currency"
            currency="USD"
          />
        </div>
        <h3>Country</h3>
        <div className={styles.filterDropBox}>
          <Dropdown
            value={selectedCity}
            options={cities}
            optionLabel="name"
            editable
            showClear
            placeholder="Select a Country"
            onChange={(e) => setSelectedCity(e.value)}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default Filter;
