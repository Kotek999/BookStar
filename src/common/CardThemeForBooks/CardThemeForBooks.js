import * as React from "react";
import { Dimensions, StyleSheet, ImageBackground } from "react-native";
import { Box, View, AspectRatio } from "native-base";
import BackgroundScreen from "../../common/BackgroundScreen/BackgroundScreen";
import BoxContainer from "./Box";
import CenterContainer from "./Center";
import StackContainer from "./Stack";
import isWEB from "../Resolutions/isWEB";

function CardThemeForBooks() {
  const { height } = Dimensions.get("window");

  return (
    <BackgroundScreen
    // isScrollView = {true or false } - przywraca ogólny scroll
    >
      <View style={styles.container}>
        <Box alignItems="center">
          <BoxContainer>
            <Box>
              <AspectRatio
                w="100%"
                ratio={isWEB() && height > 700 ? 0 : 16 / 9}
              >
                <ImageBackground
                  source={require("../../assets/imagePT.jpeg")}
                  alt="image"
                />
              </AspectRatio>
              <CenterContainer />
            </Box>
            <StackContainer />
          </BoxContainer>
        </Box>
      </View>
    </BackgroundScreen>
  );
}

export default CardThemeForBooks;

const DimensionsHeight = Dimensions.get("window").height;
const DimensionsWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: DimensionsWidth,
    height: DimensionsHeight,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    marginTop: 40,
  },
});
