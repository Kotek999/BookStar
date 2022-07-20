import * as React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image, NativeBaseProvider, Center } from "native-base";
import { blackColor, whiteColor } from "../common/Colors/colors";
import { data } from "./data";
import BackgroundScreen from "../common/BackgroundScreen/BackgroundScreen";
import ButtonCustom from "../common/ButtonCustom/ButtonCustom";
import {
  DimensionsWidth,
  DimensionsHeight,
} from "../common/Dimensions/Dimensions";

const logo = require("../assets/LogoBookStar.png");

const HomeScreen = () => {
  return (
    <NativeBaseProvider>
      <BackgroundScreen isScrollView={true}>
        <View style={styles.container}>
          <Center marginBottom={16}>
            <Image
              source={logo}
              style={styles.logo}
              alt={data.logo_alt}
              resizeMode="cover"
            ></Image>
          </Center>
          <Text style={styles.content} fontSize="lg">
            {data.content}
          </Text>
          <ButtonCustom isForwardIcon={false} value={data.buttonText} />
        </View>
      </BackgroundScreen>
    </NativeBaseProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: DimensionsWidth,
    height: DimensionsHeight,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 0,
    shadowColor: blackColor,
    shadowOpacity: 0.3,
  },
  mainTitle: {
    padding: 40,
    margin: 0,
    fontSize: 34,
    color: whiteColor,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    padding: 10,
    margin: 10,
    marginBottom: 30,
    color: whiteColor,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    width: 268,
    height: 82,
  },
});
