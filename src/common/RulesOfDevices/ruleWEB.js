import * as React from "react";
import { StyleSheet } from "react-native";
import { View } from "native-base";
import { DimensionsWidth, DimensionsHeight } from "../Dimensions/Dimensions";
import BackgroundScreen from "../BackgroundScreen/BackgroundScreen";
import CardThemeForBooks from "../../Books/PanTadeusz/CardThemeForBooks/CardThemeForBooks";
import isWEB from "../Resolutions/isWEB";

export default function WebRule(props) {
  // isScrollView = {true or false} - przywraca ogólny scroll
  return (
    <>
      {props.isCardPT && (
        <>
          {isWEB() ? (
            <BackgroundScreen>
              <View style={styles.container}>
                <CardThemeForBooks />
              </View>
            </BackgroundScreen>
          ) : (
            <View style={styles.container}>
              <CardThemeForBooks />
            </View>
          )}
        </>
      )}
      {props.isCardDZIII && (
        <>
          {isWEB() ? (
            <BackgroundScreen>
              <View style={styles.container}>
                <CardThemeForBooks />
              </View>
            </BackgroundScreen>
          ) : (
            <View style={styles.container}>
              <CardThemeForBooks />
            </View>
          )}
        </>
      )}
      {props.isCardLL && (
        <>
          {isWEB() ? (
            <BackgroundScreen>
              <View style={styles.container}>
                <CardThemeForBooks />
              </View>
            </BackgroundScreen>
          ) : (
            <View style={styles.container}>
              <CardThemeForBooks />
            </View>
          )}
        </>
      )}
      {props.isCardFD && (
        <>
          {isWEB() ? (
            <BackgroundScreen>
              <View style={styles.container}>
                <CardThemeForBooks />
              </View>
            </BackgroundScreen>
          ) : (
            <View style={styles.container}>
              <CardThemeForBooks />
            </View>
          )}
        </>
      )}
      {props.isCardWS && (
        <>
          {isWEB() ? (
            <BackgroundScreen>
              <View style={styles.container}>
                <CardThemeForBooks />
              </View>
            </BackgroundScreen>
          ) : (
            <View style={styles.container}>
              <CardThemeForBooks />
            </View>
          )}
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: DimensionsWidth,
    height: DimensionsHeight,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    marginTop: 0,
  },
});
