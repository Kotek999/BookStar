import * as React from "react";
import { Box } from "native-base";
import {
  DimensionsWidth,
  DimensionsHeight,
} from "../../../common/Dimensions/Dimensions";
import { grayBoxColor, violetColor } from "../../../common/Colors/colors";

export default function BoxContainer(props) {
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
