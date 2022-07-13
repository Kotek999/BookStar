import * as React from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { dataTime } from "./data";
import { violetColor, grayTimeColor, grayTimeDarkColor } from "../Colors/colors";

export default function TimeMarginContainer(props) {
  return (
    <>
      <View style={styles.marginContainer}>
        <Text style={styles.purpleNumber} color={violetColor}>
          {props.hours}
        </Text>
        <Text
          style={styles.grayTime}
          color={grayTimeColor}
          _dark={{
            color: grayTimeDarkColor,
          }}
        >
          {dataTime.hours}
        </Text>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.purpleNumber} color={violetColor}>
          {props.minutes}
        </Text>
        <Text
          style={styles.grayTime}
          color={grayTimeColor}
          _dark={{
            color: grayTimeDarkColor,
          }}
        >
          {dataTime.minutes}
        </Text>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.purpleNumber} color={violetColor}>
          {props.seconds}
        </Text>
        <Text
          style={styles.grayTime}
          color={grayTimeColor}
          _dark={{
            color: grayTimeDarkColor,
          }}
        >
          {dataTime.seconds}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  marginContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "flex-end",
    flexDirection: "column",
    marginLeft: 16,
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
