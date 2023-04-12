import React, { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { BiFilter } from "react-icons/bi";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';

import styles from "./Filter.module.css";

const Filter = () => {
  const [ visible, setVisible ] = useState(false);
  const [ currency1, setCurrency1 ] = useState(0);
  const [ currency2, setCurrency2 ] = useState(0);

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
            <Button label="Cancel" icon="pi pi-times" size="small" onClick={() => setVisible(false)} />
          </div>
        }
        visible={visible}
        style={{ width: '800px' }}
        onHide={() => setVisible(false)}
      >
        <h3>Rango de precios</h3>
        <p>El precio medio por noche es de 177 €</p>
        <div className={styles.filterBox}>
          <InputNumber value={currency1} onValueChange={(e) => setCurrency1(e.value)} showButtons mode="currency" currency="EUR" />
          <div />
          <InputNumber value={currency2} onValueChange={(e) => setCurrency2(e.value)} showButtons mode="currency" currency="EUR" />
        </div>
        <h3>Country</h3>
        {/* <p>El precio medio por noche es de 177 €</p> */}
        <div className={styles.filterDropBox}>
          <Dropdown options={[
              { name: 'New York', value: 'NY' },
              { name: 'Rome', value: 'RM' },
              { name: 'London', value: 'LDN' },
              { name: 'Istanbul', value: 'IST' },
              { name: 'Paris', value: 'PRS' }
          ]}
          optionLabel="Country" 
          showClear
          placeholder="Select a City"
          />
        </div>
      </Dialog>
    </div>
  );
};

export default Filter;
