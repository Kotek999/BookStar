import * as React from "react";
import { Text } from "native-base";
import { data } from "../../WelcomeBooksPage/data";
import { whiteColor } from "../Colors/colors";

export default function WelcomeContentText() {
  const textOptionsStyle = {
    marginTop: 16,
    color: whiteColor,
    fontWeight: "bold",
  };

  return (
    <>
      <Text style={textOptionsStyle} fontSize="lg">
        {data.contentOne}
      </Text>
      <Text style={textOptionsStyle} fontSize="lg">
        {data.contentTwo}
      </Text>
      <Text style={textOptionsStyle} fontSize="lg">
        {data.contentThree}
      </Text>
    </>
  );
}
