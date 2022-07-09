import * as React from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { dataTime } from "./data";

export default function TimeMarginContainer(props) {
  return (
    <>
      <View style={styles.marginContainer}>
        <Text style={styles.purpleNumber} color="violet.500">
          {props.hours}
        </Text>
        <Text
          style={styles.grayTime}
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
        >
          {dataTime.hours}
        </Text>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.purpleNumber} color="violet.500">
          {props.minutes}
        </Text>
        <Text
          style={styles.grayTime}
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
        >
          {dataTime.minutes}
        </Text>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.purpleNumber} color="violet.500">
          {props.seconds}
        </Text>
        <Text
          style={styles.grayTime}
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
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
