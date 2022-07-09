import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { View } from "native-base";
import BackgroundScreen from "../../common/BackgroundScreen/BackgroundScreen";
import CardThemeForBooks from "../../common/CardThemeForBooks/CardThemeForBooks";

const PanTadeusz = () => {
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

export default PanTadeusz;

const DimensionsHeight = Dimensions.get("window").height;
const DimensionsWidth = Dimensions.get("window").width;

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
    shadowColor: "white",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
