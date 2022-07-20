import * as React from "react";
import { StyleSheet } from "react-native";
import { View } from "native-base";
import { whiteColor } from "../../common/Colors/colors";
import {
  DimensionsWidth,
  DimensionsHeight,
} from "../../common/Dimensions/Dimensions";
import BackgroundScreen from "../../common/BackgroundScreen/BackgroundScreen";
import CardThemeForBooks from "./CardThemeForBooks/CardThemeForBooks";

const Ferdydurke = () => {
  return (
    <BackgroundScreen
    // isScrollView = {true or false} - przywraca ogólny scroll
    >
      <View style={styles.container}>
        <CardThemeForBooks />
      </View>
    </BackgroundScreen>
  );
};

export default Ferdydurke;

const styles = StyleSheet.create({
  container: {
    width: DimensionsWidth,
    height: DimensionsHeight,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    marginTop: 0,
  },
  contentContainer: {
    width: DimensionsWidth,
    height: DimensionsHeight / 3.3,
    margin: 0,
    padding: 20,
    shadowColor: whiteColor,
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
