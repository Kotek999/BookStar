import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Box, Heading, View } from "native-base";
import { data } from "./data";
import BackgroundScreen from "../common/BackgroundScreen/BackgroundScreen";
import WelcomeContentText from "../common/WelcomeContentText/WelcomeContentText";
import ButtonCustom from "../common/ButtonCustom/ButtonCustom";

const Welcome = () => {
  return (
    <BackgroundScreen isScrollView={true}>
      <View style={styles.container}>
        {/* <View
                        width="300px"
                        height="300px"
                    >
                        <Image
                            source={logoNativeBase}
                            flex={1}
                            resizeMode="contain"
                        />
                    </View> */}
        <Box style={styles.contentContainer}>
          <Heading size="xl" color="white">
            {data.title}
          </Heading>
          <WelcomeContentText />
        </Box>
        <ButtonCustom value={data.buttonText} isForwardIcon={true} />
      </View>
    </BackgroundScreen>
  );
};

export default Welcome;

const DimensionsHeight = Dimensions.get("window").height;
const DimensionsWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: DimensionsWidth,
    height: DimensionsHeight * 1.6,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 0,
  },
  contentContainer: {
    margin: 0,
    padding: 40,
    shadowColor: "white",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
