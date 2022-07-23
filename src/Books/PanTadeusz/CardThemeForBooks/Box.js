import * as React from "react";
import { Box } from "native-base";
import { grayBoxColor, violetColor } from "../../../common/Colors/colors";
import {
  DimensionsWidth,
  DimensionsHeight,
} from "../../../common/Dimensions/Dimensions";
import isWEB from "../../../common/Resolutions/isWEB";

export default function BoxContainer(props) {
  const marginLR = 80;
  const scale = 1.3;

  return (
    <Box
      {...props}
      maxWidth={DimensionsWidth}
      maxHeight={
        isWEB() && DimensionsHeight > 700
          ? DimensionsHeight / scale
          : DimensionsHeight - marginLR
      }
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
