import * as React from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { dataTime } from "./data";

export default function TimeContainer(props) {
  return (
    <View style={styles.columnContainer}>
      <Text style={styles.purpleNumber} color="violet.500">
        {props.days}
      </Text>
      <Text
        style={styles.grayTime}
        color="coolGray.600"
        _dark={{
          color: "warmGray.200",
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
