import * as React from "react";
import { View } from "native-base";
import { StyleSheet } from "react-native";
import TimeContainer from "./TimeContainer";
import TimeMarginContainer from "./TimeMarginContainer";

export default function Time(props) {
  return (
    <View style={styles.rowContainer}>
      <TimeContainer {...props} />
      <TimeMarginContainer {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "flex-end",
    flexDirection: "row",
  },
});
