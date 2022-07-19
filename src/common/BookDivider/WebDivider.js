import * as React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Divider } from "native-base";
import { StarDivider } from "./BookDivider";
import { pinkBreakLineColor } from "../Colors/colors";
import isWEB from "../Resolutions/isWEB";

export const WebDivider = () => {
  const DimensionsHeight = Dimensions.get("window").height;

  return (
    <>
      {isWEB() && DimensionsHeight > 700 ? (
        <Divider style={styles.breakline} />
      ) : (
        <StarDivider />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  breakline: {
    height: 1.5,
    backgroundColor: pinkBreakLineColor,
  },
});
