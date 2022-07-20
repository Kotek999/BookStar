import * as React from "react";
import { DimensionsHeight } from "../Dimensions/Dimensions";
import { Text } from "native-base";
import isWEB from "../Resolutions/isWEB";

export default function IconMargin() {
  return <>{isWEB() && DimensionsHeight > 700 && <Text marginLeft={2} />}</>;
}
