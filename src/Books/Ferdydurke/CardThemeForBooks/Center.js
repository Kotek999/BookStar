import * as React from "react";
import { View } from "native-base";
import CardLogo from "../../../common/CardLogo/CardLogo";

export default function CenterContainer() {
  return (
    <View alignItems="center" height={7}>
      <CardLogo />
    </View>
  );
}
