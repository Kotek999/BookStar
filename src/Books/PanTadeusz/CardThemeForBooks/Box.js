import * as React from "react";
import { Box } from "native-base";
import { grayBoxColor, violetColor } from "../../../common/Colors/colors";
import {
  DimensionsWidth,
  DimensionsHeight,
} from "../../../common/Dimensions/Dimensions";
import isWEB from "../../../common/Resolutions/isWEB";
import isIOS from "../../../common/Resolutions/isIOS";

export default function BoxContainer(props) {
  const marginLR = 25;
  const scale = 1.3;

  const marginIOS = 80;

  return (
    <Box
      {...props}
      maxWidth={DimensionsWidth}
      maxHeight={
        isWEB() && DimensionsHeight > 700
          ? DimensionsHeight / scale
          : DimensionsHeight - marginLR && isIOS()
          ? DimensionsHeight - marginIOS
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
