import * as React from "react";
import { StyleSheet } from "react-native";
import { View } from "native-base";
import {
  DimensionsWidth,
  DimensionsHeight,
} from "../common/Dimensions/Dimensions";
import BooksList from "../common/BooksList/BooksList";
import BackgroundScreen from "../common/BackgroundScreen/BackgroundScreen";

const BooksChoice = () => {
  return (
    <BackgroundScreen isScrollView={true}>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <BooksList />
        </View>
      </View>
    </BackgroundScreen>
  );
};

export default BooksChoice;

const styles = StyleSheet.create({
  container: {
    width: DimensionsWidth,
    height: DimensionsHeight,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 60,
  },
  listContainer: {
    width: DimensionsWidth,
    height: DimensionsHeight,
  },
});
