import * as React from "react";
import { Dimensions } from "react-native";
import { Text } from "native-base";
import isWEB from "../Resolutions/isWEB";

export default function IconMargin() {
  const { height } = Dimensions.get("window");

  return <>{isWEB() && height > 700 ? <Text marginLeft={2} /> : null}</>;
};
