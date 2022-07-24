import * as React from "react";
import { StyleSheet } from "react-native";
import { View, Image } from "native-base";
import { data } from "../../homeScreenPage/data";
import ArrowIcon from "../BooksNavigationArrow/ArrowIcon";

const logo = require("../../assets/LogoBookStar.png");

export default function CardLogo() {
  return (
    <View style={styles.container}>
      <ArrowIcon isBack={true} />
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
  container: {
    alignSelf: "center",
    width: "150%",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  logo: {
    marginTop: 4,
    width: 90,
    height: 26,
  },
});
