import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Box, Heading, View, Image } from "native-base";
import { data } from "./data";
import { blackColor, whiteColor } from "../common/Colors/colors";
import BackgroundScreen from "../common/BackgroundScreen/BackgroundScreen";
import WelcomeContentText from "../common/WelcomeContentText/WelcomeContentText";
import ButtonCustom from "../common/ButtonCustom/ButtonCustom";
import starIcon from "../assets/star.png";
import {
  DimensionsWidth,
  DimensionsHeight,
} from "../common/Dimensions/Dimensions";

const Welcome = () => {
  return (
    <SafeAreaView styles={{ flex: 1 }}>
      <BackgroundScreen isScrollView={true}>
        <View style={styles.container}>
          <Box style={styles.contentContainer}>
            <Heading size="xl" color={whiteColor}>
              {data.title}{" "}
              <Image source={starIcon} alt="star" style={styles.starIcon} />
            </Heading>
            <WelcomeContentText />
          </Box>
          <ButtonCustom value={data.buttonText} isForwardIcon={true} />
        </View>
      </BackgroundScreen>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: DimensionsWidth,
    height: DimensionsHeight,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 0,
  },
  contentContainer: {
    margin: 0,
    padding: 40,
    shadowColor: blackColor,
    shadowOpacity: 0.3,
  },
  starIcon: {
    width: 35,
    height: 35,
  },
});
