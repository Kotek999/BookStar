import * as React from "react";
import { StyleSheet } from "react-native";
import { Stack, Text, Divider, Image } from "native-base";
import { grayColor, whiteColor, pinkBreakLineColor } from "../Colors/colors";
import starIcon from "../../assets/star4.png";

export const StarDivider = () => {
  return (
    <Stack style={styles.lineContainer}>
      <Divider style={styles.breakline} />
      <Text style={styles.starIconContainer}>
        <Image source={starIcon} alt="star" style={styles.starIcon} />
      </Text>
    </Stack>
  );
};

const styles = StyleSheet.create({
  lineContainer: {
    backgroundColor: whiteColor,
    paddingTop: 20,
    paddingBottom: 0,
  },
  breakline: {
    height: 1.5,
    backgroundColor: pinkBreakLineColor,
  },
  starIconContainer: {
    textAlign: "center",
    alignSelf: "center",
    width: 40,
    marginTop: -22,
    height: 30,
    color: grayColor,
    fontSize: 10,
    letterSpacing: 1.25,
    backgroundColor: whiteColor,
  },
  starIcon: {
    width: 30,
    height: 30,
  },
});
