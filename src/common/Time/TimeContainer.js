import * as React from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { dataTime } from "./data";
import { violetColor, grayTimeColor, grayTimeDarkColor } from "../Colors/colors";

export default function TimeContainer(props) {
  return (
    <View style={styles.columnContainer}>
      <Text style={styles.purpleNumber} color={violetColor}>
        {props.days}
      </Text>
      <Text
        style={styles.grayTime}
        color={grayTimeColor}
        _dark={{
          color: grayTimeDarkColor,
        }}
      >
        {dataTime.days}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  columnContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "flex-end",
    flexDirection: "column",
  },
  purpleNumber: {
    fontWeight: "600",
    fontSize: 12.5,
  },
  grayTime: {
    fontWeight: "600",
    fontSize: 10.5,
    marginTop: 4,
  },
});
