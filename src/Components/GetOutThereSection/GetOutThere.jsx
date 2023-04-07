/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Box, Flex, Spacer, Img, Text } from "@chakra-ui/react";
import styles from "./style.module.css";

const GetOutThere = () => {
  return (
    <div className={styles.container}>
      <Box height="195px" bgColor="#FAF1ED" margin="80px 0" className={styles.nextTripTop}>
        <Flex>
          <Text
            fontSize="30px"
            fontWeight="bold"
            marginTop="50px"
            marginLeft="10px"
          >
            Get out there
            <Text fontSize="15px" fontWeight="normal">
              Best of the Best tours, attractions & activities you won’t want to miss.
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
          <span>Get out there</span>
          <Text fontSize="15px" fontWeight="normal">
            Best of the Best tours, attractions & activities you won’t want to miss.
          </Text>
          <a className={styles.blackBtn}>
            See The List
          </a>
        </Text>
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1" style={{ width: '100%' }} alt="" />
      </div>
    </div>
  );
};

export default GetOutThere;
