import * as React from "react";
import { ImageBackground } from "react-native";
import { Box, AspectRatio } from "native-base";
import { DimensionsHeight } from "../../../common/Dimensions/Dimensions";
import Copyright from "../../../common/CopyrightModule/Copyright";
import BackgroundScreen from "../../../common/BackgroundScreen/BackgroundScreen";
import BoxContainer from "../../../common/CardBoxContainer/CardBoxContainer";
import CenterContainer from "../../../common/CardCenterContainer/CardCenterContainer";
import StackContainer from "./Stack";
import isWEB from "../../../common/Resolutions/isWEB";
import IosRule from "../../../common/RulesOfDevices/ruleIOS";

function CardThemeForBooks() {
  return (
    <BackgroundScreen
    // isScrollView = {true or false } - przywraca ogólny scroll
    >
      <IosRule>
        <Box alignItems="center">
          <BoxContainer>
            <Box>
              <CenterContainer />
              <AspectRatio
                w="100%"
                ratio={isWEB() && DimensionsHeight > 700 ? 0 : 16 / 9}
              >
                <ImageBackground
                  source={require("../../../assets/imageDZIII.jpg")}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <StackContainer />
            <Copyright />
          </BoxContainer>
        </Box>
      </IosRule>
    </BackgroundScreen>
  );
}

export default CardThemeForBooks;
