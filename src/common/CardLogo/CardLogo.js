import * as React from "react";
import { StyleSheet } from "react-native";
import { View, Image } from "native-base";
import { data } from "../../homeScreenPage/data";
import ArrowIcon from "../BooksNavigationArrow/ArrowIcon";

const logo = require("../../assets/LogoBookStar.png");

export default function CardLogo() {
  return (
    <View> 
      {/* flexDirection="row" width={100} */}
      {/* <ArrowIcon /> */}
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
  logo: {
    marginTop: 4,
    width: 90,
    height: 26,
  },
});
