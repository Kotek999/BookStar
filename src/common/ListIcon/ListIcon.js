import * as React from "react";
import { Icon, Stack } from "native-base";
import { StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

export const IconList = () => (
  <Stack style={styles.iconContainer}>
    <Icon as={Entypo} name="dot-single" size="md" color="violet.500" />
  </Stack>
);

const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 10,
    marginTop: -6,
  },
});
