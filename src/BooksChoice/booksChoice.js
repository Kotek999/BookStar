import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { View } from "native-base";
import BooksList from "../common/BooksList/BooksList";
import BackgroundScreen from "../common/BackgroundScreen/BackgroundScreen";

const BooksChoice = () => {
  return (
    <BackgroundScreen isScrollView={false}>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <BooksList />
        </View>
      </View>
    </BackgroundScreen>
  );
};

export default BooksChoice;

const DimensionsHeight = Dimensions.get("window").height;
const DimensionsWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: DimensionsWidth,
    height: DimensionsHeight,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    marginTop: 30,
  },
  listContainer: {
    width: DimensionsWidth,
    height: DimensionsHeight,
  },
});
