import * as React from "react";
import { StyleSheet } from "react-native";
import { View } from "native-base";
import { DimensionsWidth, DimensionsHeight } from "../Dimensions/Dimensions";
import isWEB from "../Resolutions/isWEB";
import isIOS from "../Resolutions/isIOS";

export default function IosRule(props) {
  return (
    <View
      {...props}
      style={
        isWEB() && DimensionsHeight > 700
          ? styles.margin
          : styles.container && isIOS()
          ? styles.containerIOS
          : styles.container
      }
    ></View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: DimensionsWidth,
    height: DimensionsHeight,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    marginTop: 25,
  },
  containerIOS: {
    marginTop: 0,
  },
  margin: {
    marginTop: 40,
  },
});
