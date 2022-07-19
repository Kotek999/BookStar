import * as React from "react";
import { StyleSheet } from "react-native";
import { View, Image } from "native-base";
import { whiteColor } from "../Colors/colors";
import { data } from "../../homeScreenPage/data";

const logo = require("../../assets/LogoBookStar.png");

export default function CardLogo() {
  return (
    <View>
      <Image
        source={logo}
        style={styles.logo}
        alt={data.logo_alt}
        resizeMode="cover"
      ></Image>
    </View>
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
  logo: {
    marginTop: 2,
    width: 90,
    height: 26,
  },
});
