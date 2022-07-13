import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "native-base";
import { whiteColor } from "../Colors/colors";
import BookIconEntypo from "react-native-vector-icons/Entypo";

export default function LogoText(props) {
  return (
    <>
      {props.isHomeScreen ? (
        <View>
          <Text style={styles.homeMainTitle}>
            {props.value} {""}
            <BookIconEntypo name="open-book" size={34} color={whiteColor} />
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.mainTitle}>
            {props.value} {""}
            <BookIconEntypo name="open-book" size={18} color={whiteColor} />
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  homeMainTitle: {
    padding: 20,
    margin: 0,
    fontSize: 34,
    color: whiteColor,
    fontWeight: "bold",
    textAlign: "center",
  },
  mainTitle: {
    padding: 5,
    margin: 0,
    fontSize: 18,
    color: whiteColor,
    fontWeight: "bold",
    textAlign: "center",
  },
});
