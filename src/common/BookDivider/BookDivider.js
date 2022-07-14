import * as React from "react";
import { StyleSheet } from "react-native";
import { Stack, Text, Divider } from "native-base";
import { grayColor, whiteColor, pinkBreakLineColor } from "../Colors/colors";
import BookIconEntypo from "react-native-vector-icons/Entypo";

export const BookDivider = () => {
  return (
    <Stack style={styles.lineContainer}>
      <Divider style={styles.breakline} />
      <Text style={styles.bookIcon}>
        <BookIconEntypo name="open-book" size={18} color={grayColor} />
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
  bookIcon: {
    textAlign: "center",
    alignSelf: "center",
    width: 45,
    marginTop: -12,
    height: 20,
    color: grayColor,
    fontSize: 10,
    letterSpacing: 1.25,
    backgroundColor: whiteColor,
  },
});
