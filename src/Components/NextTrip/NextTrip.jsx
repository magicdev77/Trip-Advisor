/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Box, Flex, Spacer, Img, Text } from "@chakra-ui/react";
import styles from "./style.module.css";

const NextTrip = () => {
  return (
    <div className={styles.container}>
      <Box height="195px" bgColor="#FAF1ED"  className={styles.nextTripTop}>
        <Flex>
          <Text
            fontSize="30px"
            fontWeight="bold"
            marginTop="50px"
            marginLeft="10px"
          >
            Your next trip starts here
            <Text fontSize="15px" fontWeight="normal">
              Top-rated hotels that have earned the Best of the Best crown.
            </Text>
            <a className={styles.blackBtn}>
              See The List
            </a>
          </Text>
          <Spacer />
          <Box
            bgImage="url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1')"
            height="195px"
            width="400px"
            bgPos="center"
          >
            <Img
              marginLeft="250px"
              marginTop="30px"
              height="150px"
              src="https://static.tacdn.com/img2/fallback_ads/tc-badge.png"
            />
          </Box>
        </Flex>
      </Box>

      <div className={styles.nextTripBottom}>
        <Text
          fontSize="25px"
          fontWeight="bold"
          // marginTop="50px"
          marginLeft="10px"
          color="white"
          position="absolute"
        >
          <span>Your next trip starts here</span>
          <Text fontSize="15px" fontWeight="normal">
            Top-rated hotels that have earned the Best of the Best crown.
          </Text>
          <a className={styles.blackBtn}>
            See The List
          </a>
        </Text>
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1" style={{ width: '100%' }} alt="" />
      </div>

      <Box bgColor="#F2B203" margin="80px 0" style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Box className={styles.leftTextBox}>
          <Img
            style={{ padding: '15px', width: '100%' }}
            src="caption.jpg" 
          />
        </Box>
        <Box className={styles.rightTextBox }>
          <p><Img src="logo_ico.svg" style={{ width: "25px" }} /><center>&nbsp;&nbsp;Tripadivsor Foundation</center></p>
          <h2><center>Help feed People</center></h2>
          <p><center>We’ve raised $9 million USD for World Central Kitchen’s emergency food relief efforts around the world. Keep it going by supporting their work in Turkey and beyond.</center></p>
          <a className={ styles.blackBtn }>Donate Now</a>
        </Box>
      </Box>
    </div>
  );
};

export default NextTrip;
