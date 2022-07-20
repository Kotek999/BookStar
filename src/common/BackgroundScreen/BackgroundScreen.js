import * as React from "react";
import { ImageBackground, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { DimensionsWidth, DimensionsHeight } from "../Dimensions/Dimensions";
import {
  blueValueOfGradientColor,
  grayValueOfGradientColor,
} from "../Colors/colors";

function BackgroundScreen(props) {
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
