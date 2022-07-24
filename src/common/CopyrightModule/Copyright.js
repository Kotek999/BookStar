import * as React from "react";
import { StyleSheet } from "react-native";
import { data } from "../../BooksChoice/data";
import { View, Heading } from "native-base";

export default function Copyright() {
  return (
    <View style={styles.copyrightContainer}>
      <Heading size="xs" mb="0" color="#cccccc">
        &copy; {data.authors} &copy;
      </Heading>
    </View>
  );
}

const styles = StyleSheet.create({
  copyrightContainer: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
