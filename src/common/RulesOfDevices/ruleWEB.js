import * as React from "react";
import { StyleSheet } from "react-native";
import { View } from "native-base";
import { DimensionsWidth, DimensionsHeight } from "../Dimensions/Dimensions";
import BackgroundScreen from "../BackgroundScreen/BackgroundScreen";
import CardThemeForBooksPT from "../../Books/PanTadeusz/CardThemeForBooks/CardThemeForBooks";
import CardThemeForBooksDZIII from "../../Books/Dziady/CardThemeForBooks/CardThemeForBooks";
import CardThemeForBooksLL from "../../Books/Lalka/CardThemeForBooks/CardThemeForBooks";
import CardThemeForBooksFD from "../../Books/Ferdydurke/CardThemeForBooks/CardThemeForBooks";
import CardThemeForBooksWS from "../../Books/Wesele/CardThemeForBooks/CardThemeForBooks";
import isWEB from "../Resolutions/isWEB";

export default function WebRule(props) {
  return (
    <>
      {props.isCardPT && (
        <>
          {isWEB() ? (
            <BackgroundScreen>
              <View style={styles.container}>
                <CardThemeForBooksPT />
              </View>
            </BackgroundScreen>
          ) : (
            <View style={styles.container}>
              <CardThemeForBooksPT />
            </View>
          )}
        </>
      )}
      {props.isCardDZIII && (
        <>
          {isWEB() ? (
            <BackgroundScreen>
              <View style={styles.container}>
                <CardThemeForBooksDZIII />
              </View>
            </BackgroundScreen>
          ) : (
            <View style={styles.container}>
              <CardThemeForBooksDZIII />
            </View>
          )}
        </>
      )}
      {props.isCardLL && (
        <>
          {isWEB() ? (
            <BackgroundScreen>
              <View style={styles.container}>
                <CardThemeForBooksLL />
              </View>
            </BackgroundScreen>
          ) : (
            <View style={styles.container}>
              <CardThemeForBooksLL />
            </View>
          )}
        </>
      )}
      {props.isCardFD && (
        <>
          {isWEB() ? (
            <BackgroundScreen>
              <View style={styles.container}>
                <CardThemeForBooksFD />
              </View>
            </BackgroundScreen>
          ) : (
            <View style={styles.container}>
              <CardThemeForBooksFD />
            </View>
          )}
        </>
      )}
      {props.isCardWS && (
        <>
          {isWEB() ? (
            <BackgroundScreen>
              <View style={styles.container}>
                <CardThemeForBooksWS />
              </View>
            </BackgroundScreen>
          ) : (
            <View style={styles.container}>
              <CardThemeForBooksWS />
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
