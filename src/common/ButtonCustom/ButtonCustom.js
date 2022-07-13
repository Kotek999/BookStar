import * as React from "react";
import { Button, Text, View } from "native-base";
import { StyleSheet, Dimensions } from "react-native";
import IconForward from "../IconForward/IconForward";
import routes from "../../routing/routes";
import { useNavigation } from "@react-navigation/native";

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

const DimensionsHeight = Dimensions.get("window").height;
const DimensionsWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: DimensionsWidth,
    height: DimensionsHeight,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    marginTop: 60,
  },
  button: {
    width: 155,
    height: DimensionsHeight / 18,
    margin: 20,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  buttonTitle: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#272ba1",
  },
});
