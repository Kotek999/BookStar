import * as React from "react";
import RightArrowIconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import { blueButtonTitleColor } from "../Colors/colors";

export default function IconForward() {
  return (
    <>
      <RightArrowIconMaterialIcons
        name="arrow-forward-ios"
        size={12}
        color={blueButtonTitleColor}
      />
    </>
  );
}
