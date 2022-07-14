import * as React from "react";
import { Dimensions, ImageBackground, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  blueValueOfGradientColor,
  grayValueOfGradientColor,
} from "../Colors/colors";

function BackgroundScreen(props) {
  const DimensionsHeight = Dimensions.get("window").height;
  const DimensionsWidth = Dimensions.get("window").width;

  return (
    <>
      {props.isScrollView ? (
        <ScrollView>
          <ImageBackground
            style={{
              width: DimensionsWidth,
              height: DimensionsHeight,
            }}
          >
            <LinearGradient
              {...props}
              colors={[
                blueValueOfGradientColor,
                grayValueOfGradientColor,
                grayValueOfGradientColor,
              ]}
            ></LinearGradient>
          </ImageBackground>
        </ScrollView>
      ) : (
        <ImageBackground
          style={{
            width: DimensionsWidth,
            height: DimensionsHeight,
          }}
        >
          <LinearGradient
            {...props}
            colors={[
              blueValueOfGradientColor,
              grayValueOfGradientColor,
              grayValueOfGradientColor,
            ]}
          ></LinearGradient>
        </ImageBackground>
      )}
    </>
  );
}

export default BackgroundScreen;
