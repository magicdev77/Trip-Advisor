import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { BiFilter } from "react-icons/bi";
// import Modal from 'react-bootstrap/Modal';

import styles from "./Filter.module.css";

const Filter = () => {
  // const [isOpen, setIsOpen] = useState(false);

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
      <Button className={styles.filterBtn}>
        <BiFilter />
        <span>Filters</span>
      </Button>
      {/* <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={isOpen}
        onHide={() => setIsOpen(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default Filter;
