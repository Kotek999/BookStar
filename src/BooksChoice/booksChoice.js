import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "native-base";
import {
  DimensionsWidth,
  DimensionsHeight,
} from "../common/Dimensions/Dimensions";
import BooksList from "../common/BooksList/BooksList";
import BackgroundScreen from "../common/BackgroundScreen/BackgroundScreen";

const BooksChoice = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView styles={{ flex: 1 }}>
      <BackgroundScreen isScrollView={true} paddingTop={insets.top}>
        <View style={styles.container}>
          <View style={styles.listContainer}>
            <BooksList />
          </View>
        </View>
      </BackgroundScreen>
    </SafeAreaView>
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
  },
  listContainer: {
    width: DimensionsWidth,
    height: DimensionsHeight,
  },
});
