import { Box, Flex, Img, Link, List, ListItem} from "@chakra-ui/react";
import React from "react";
import styles from './FooterAllPage.module.css';
// import { FaFacebook } from "react-icons/fa";
// import { BsTwitter } from "react-icons/bs";
// import { GrPinterest, GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div>
      <Box bgColor={"#FAF1ED"}>
        <Box className={styles.Container}>
          <Box>
            <Flex justifyContent={'space-between'}>
              <Box>
                <List paddingLeft={0}>
                  <ListItem fontSize={"20px"}>About Tripadvisor</ListItem>
                  <ListItem>
                    <Link>About Us</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Press</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Resources and Policies</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Careers</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Trust & Safety</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Contact Us</Link>
                  </ListItem>
                </List>
              </Box>
              <Box>
                <List>
                  <ListItem fontSize={"20px"}>Explore</ListItem>
                  <ListItem>
                    <Link>Write a review</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Add a Place</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Join</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Traveleer's Choice</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Green Leaders</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Help Centers</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Travel Articles</Link>
                  </ListItem>
                </List>
              </Box>
              <Box>
                <List>
                  <ListItem fontSize={"20px"}>Do Business With Us</ListItem>
                  <ListItem>
                    <Link>Owners & DMO/CVB</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Business Advantage</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Sponsored Placements</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Access our Content Api </Link>
                  </ListItem>
                  <ListItem>
                    <Link>Trust & Safety</Link>
                  </ListItem>
                  <ListItem fontSize={"20px"}>Get The App</ListItem>
                  <ListItem>
                    <Link>iphone App</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Android App</Link>
                  </ListItem>
                </List>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex justifyContent={'center'}>
              <Box>
                <List>
                  <ListItem fontSize={"20px"}>Tripadvisor sites</ListItem>
                  <ListItem>
                    <Link>Book tours and attraction tickets on Viator</Link>
                  </ListItem>
                </List>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box className={styles.Container}>
          <Box>
            <Flex alignItems={"center"} justifyContent={'flex-start'}>
              <Img
                height={"35px"}
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
              ></Img>
              <List margin={0}>
                <ListItem fontWeight={"bold"} marginLeft={"8px"} marginTop={'5px'} as={"u"}>
                  <Link>Terms Of Use</Link>
                </ListItem>
                <ListItem fontWeight={"bold"} marginLeft={"8px"} marginTop={'5px'} as={"u"}>
                  <Link>Privacy and coolies statement</Link>
                </ListItem>
                <ListItem fontWeight={"bold"} marginLeft={"8px"} marginTop={'5px'} as={"u"}>
                  <Link>cookies Concent</Link>
                </ListItem>
                <ListItem fontWeight={"bold"} marginLeft={"8px"} marginTop={'5px'} as={"u"}>
                  <Link>Site Map</Link>
                </ListItem>
              </List>
            </Flex>
          </Box>
          <Box>
            <Flex justifyContent={'space-evenly'} alignItems={'center'}>
                <Box>
                  <select className={styles.footerSelect}>
                    <option value="£ British Pounds">£ British Pounds</option>
                    <option value='$ U.S. Dollars'>$ U.S. Dollars</option>
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
                    <option value='$ U.S. Dollars'>$ U.S. Dollars</option>
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
}

export default Footer;
