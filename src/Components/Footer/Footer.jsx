import {
  Box,
  Flex,
  Img,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import styles from "./FooterAllPage.module.css";
import classnames from 'classnames';
// import { FaFacebook } from "react-icons/fa";
// import { BsTwitter } from "react-icons/bs";
// import { GrPinterest, GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div>
      <Box bgColor={"#FAF1ED"} className={classnames(styles.desktopShow, styles.Fixed)}>
        <Box className={styles.Container}>
          <Box>
            <Flex alignItems={"center"} justifyContent={"flex-start"}>
              <Img
                height={"35px"}
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
              ></Img>
              <List margin={0}>
                <ListItem
                  fontWeight={"bold"}
                  marginLeft={"8px"}
                  marginTop={"5px"}
                  as={"u"}
                >
                  <Link>Terms Of Use</Link>
                </ListItem>
                <ListItem
                  fontWeight={"bold"}
                  marginLeft={"8px"}
                  marginTop={"5px"}
                  as={"u"}
                >
                  <Link>Privacy and coolies statement</Link>
                </ListItem>
                <ListItem
                  fontWeight={"bold"}
                  marginLeft={"8px"}
                  marginTop={"5px"}
                  as={"u"}
                >
                  <Link>cookies Concent</Link>
                </ListItem>
                <ListItem
                  fontWeight={"bold"}
                  marginLeft={"8px"}
                  marginTop={"5px"}
                  as={"u"}
                >
                  <Link>Site Map</Link>
                </ListItem>
              </List>
            </Flex>
          </Box>
          <Box>
            <Flex justifyContent={"space-evenly"} alignItems={"center"}>
              <Box>
                <select className={styles.footerSelect}>
                  <option value="£ British Pounds">£ British Pounds</option>
                  <option value="$ U.S. Dollars">$ U.S. Dollars</option>
                  <option value="₹ INR">₹ INR</option>
                  <option value="€ Euros">€ Euros</option>
                  <option value="CA$ Canadian Dollars">
                    CA$ Canadian Dollars
                  </option>
                  <option value="CHF Swiss Francs">CHF Swiss Francs</option>
                </select>
              </Box>
              <Box>
                <select className={styles.footerSelect}>
                  <option value="£ British Pounds">£ British Pounds</option>
                  <option value="$ U.S. Dollars">$ U.S. Dollars</option>
                  <option value="₹ INR">₹ INR</option>
                  <option value="€ Euros">€ Euros</option>
                  <option value="CA$ Canadian Dollars">
                    CA$ Canadian Dollars
                  </option>
                  <option value="CHF Swiss Francs">CHF Swiss Francs</option>
                </select>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box bgColor={"#FAF1ED"} className={classnames(styles.mobileShow, styles.Fixed)}>
        <Box className={styles.Container}>
          <Box>
            <Flex
              justifyContent={"space-evenly"}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              <Box>
                <select className={styles.footerSelect}>
                  <option value="£ British Pounds">£ British Pounds</option>
                  <option value="$ U.S. Dollars">$ U.S. Dollars</option>
                  <option value="₹ INR">₹ INR</option>
                  <option value="€ Euros">€ Euros</option>
                  <option value="CA$ Canadian Dollars">
                    CA$ Canadian Dollars
                  </option>
                  <option value="CHF Swiss Francs">CHF Swiss Francs</option>
                </select>
              </Box>
              <Box>
                <select className={styles.footerSelect}>
                  <option value="£ British Pounds">£ British Pounds</option>
                  <option value="$ U.S. Dollars">$ U.S. Dollars</option>
                  <option value="₹ INR">₹ INR</option>
                  <option value="€ Euros">€ Euros</option>
                  <option value="CA$ Canadian Dollars">
                    CA$ Canadian Dollars
                  </option>
                  <option value="CHF Swiss Francs">CHF Swiss Francs</option>
                </select>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
