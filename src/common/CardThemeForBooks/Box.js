import * as React from "react";
import { Dimensions } from "react-native";
import { Box } from "native-base";
import { grayBoxColor, violetColor } from "../Colors/colors";

export default function BoxContainer(props) {
  const DimensionsWidth = Dimensions.get("window").width;
  const DimensionsHeight = Dimensions.get("window").height;

  const marginLR = 20;
  const scale = 1.3;

  return (
    <Box
      {...props}
      maxWidth={DimensionsWidth - marginLR}
      maxHeight={DimensionsHeight / scale}
      rounded="xl"
      overflow="hidden"
      _dark={{
        borderColor: grayBoxColor,
        backgroundColor: grayBoxColor,
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: violetColor,
      }}
    ></Box>
  );
}
