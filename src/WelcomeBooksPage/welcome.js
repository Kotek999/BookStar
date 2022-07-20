import * as React from "react";
import { StyleSheet } from "react-native";
import { Box, Heading, View } from "native-base";
import { data } from "./data";
import { blackColor, whiteColor } from "../common/Colors/colors";
import BackgroundScreen from "../common/BackgroundScreen/BackgroundScreen";
import WelcomeContentText from "../common/WelcomeContentText/WelcomeContentText";
import ButtonCustom from "../common/ButtonCustom/ButtonCustom";
import {
  DimensionsWidth,
  DimensionsHeight,
} from "../common/Dimensions/Dimensions";

const Welcome = () => {
  return (
    <BackgroundScreen isScrollView={true}>
      <View style={styles.container}>
        <Box style={styles.contentContainer}>
          <Heading size="xl" color={whiteColor}>
            {data.title}
          </Heading>
          <WelcomeContentText />
        </Box>
        <ButtonCustom value={data.buttonText} isForwardIcon={true} />
      </View>
    </BackgroundScreen>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: DimensionsWidth,
    height: DimensionsHeight * 1.6,
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
});
