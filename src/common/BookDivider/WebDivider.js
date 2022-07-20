import * as React from "react";
import { StyleSheet } from "react-native";
import { DimensionsHeight } from "../Dimensions/Dimensions";
import { Divider } from "native-base";
import { StarDivider } from "./BookDivider";
import { pinkBreakLineColor } from "../Colors/colors";
import isWEB from "../Resolutions/isWEB";

export const WebDivider = () => {
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
