import * as React from "react";
import { Button, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { DimensionsWidth, DimensionsHeight } from "../Dimensions/Dimensions";
import IconForward from "../IconForward/IconForward";
import routes from "../../routing/routes";
import { useNavigation } from "@react-navigation/native";
import { blackColor, whiteColor, blueButtonTitleColor } from "../Colors/colors";

export default function ButtonCustom(props) {
  const navigation = useNavigation();

  return (
    <>
      {props.isForwardIcon ? (
        <View style={styles.container}>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate(routes.BooksChoice)}
          >
            <Text style={styles.buttonTitle}>
              {props.value}
              <IconForward />
            </Text>
          </Button>
        </View>
      ) : (
        <Button
          style={styles.button}
          onPress={() => navigation.navigate(routes.WelcomeBooksPage)}
        >
          <Text style={styles.buttonTitle}>{props.value}</Text>
        </Button>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: DimensionsWidth,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
  },
  button: {
    width: 155,
    height: 40,
    margin: 20,
    borderColor: whiteColor,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: whiteColor,
    shadowColor: blackColor,
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  buttonTitle: {
    fontSize: 16,
    textTransform: "uppercase",
    color: blueButtonTitleColor,
  },
});
