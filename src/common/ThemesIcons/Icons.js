import * as React from "react";
import { Icon, Stack } from "native-base";
import { StyleSheet } from "react-native";
import {
  Entypo,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Octicons,
} from "@expo/vector-icons";
import { violetColor } from "../Colors/colors";

export const IconClover = () => (
  <Stack style={styles.iconContainer}>
    <Icon
      as={MaterialCommunityIcons}
      name="clover"
      size={19}
      color={violetColor}
    />
  </Stack>
);
export const IconBrokenHeart = () => (
  <Stack style={styles.iconContainer}>
    <Icon
      as={MaterialCommunityIcons}
      name="heart-broken"
      size={19}
      color={violetColor}
    />
  </Stack>
);
export const IconChange = () => (
  <Stack style={styles.iconContainer}>
    <Icon
      as={MaterialIcons}
      name="published-with-changes"
      size={19}
      color={violetColor}
    />
  </Stack>
);
export const IconFamily = () => (
  <Stack style={styles.iconContainer}>
    <Icon
      as={MaterialIcons}
      name="family-restroom"
      size={19}
      color={violetColor}
    />
  </Stack>
);
export const IconHome = () => (
  <Stack style={styles.iconContainer}>
    <Icon as={Ionicons} name="home" size={19} color={violetColor} />
  </Stack>
);
export const IconMan = () => (
  <Stack style={styles.iconContainer}>
    <Icon as={Entypo} name="drink" size={19} color={violetColor} />
  </Stack>
);
export const IconResidence = () => (
  <Stack style={styles.iconContainer}>
    <Icon
      as={MaterialCommunityIcons}
      name="castle"
      size={19}
      color={violetColor}
    />
  </Stack>
);
export const IconNature = () => (
  <Stack style={styles.iconContainer}>
    <Icon as={FontAwesome} name="envira" size={19} color={violetColor} />
  </Stack>
);
export const IconPatriot = () => (
  <Stack style={styles.iconContainer}>
    <Icon
      as={MaterialCommunityIcons}
      name="sword-cross"
      size={19}
      color={violetColor}
    />
  </Stack>
);
// DZIII Icons
export const IconFreedom = () => (
  <Stack style={styles.iconContainer}>
    <Icon as={Entypo} name="flag" size={19} color={violetColor} />
  </Stack>
);
export const IconCry = () => (
  <Stack style={styles.iconContainer}>
    <Icon as={FontAwesome5} name="sad-cry" size={19} color={violetColor} />
  </Stack>
);
export const IconSacrifice = () => (
  <Stack style={styles.iconContainer}>
    <Icon
      as={MaterialCommunityIcons}
      name="church"
      size={19}
      color={violetColor}
    />
  </Stack>
);
export const IconSleep = () => (
  <Stack style={styles.iconContainer}>
    <Icon
      as={MaterialCommunityIcons}
      name="sleep"
      size={19}
      color={violetColor}
    />
  </Stack>
);
export const IconHeart = () => (
  <Stack style={styles.iconContainer}>
    <Icon
      as={MaterialCommunityIcons}
      name="heart"
      size={19}
      color={violetColor}
    />
  </Stack>
);
export const IconAlone = () => (
  <Stack style={styles.iconContainer}>
    <Icon as={FontAwesome5} name="meh" size={19} color={violetColor} />
  </Stack>
);
export const IconCrown = () => (
  <Stack style={styles.iconContainer}>
    <Icon
      as={MaterialCommunityIcons}
      name="crown"
      size={19}
      color={violetColor}
    />
  </Stack>
);
// LL Icons
export const IconJob = () => (
  <Stack style={styles.iconContainer}>
    <Icon as={MaterialIcons} name="work" size={19} color={violetColor} />
  </Stack>
);
export const IconMiss = () => (
  <Stack style={styles.iconContainer}>
    <Icon
      as={MaterialCommunityIcons}
      name="human-male-child"
      size={19}
      color={violetColor}
    />
  </Stack>
);
export const IconTravel = () => (
  <Stack style={styles.iconContainer}>
    <Icon
      as={MaterialCommunityIcons}
      name="airplane"
      size={19}
      color={violetColor}
    />
  </Stack>
);
export const IconFriendship = () => (
  <Stack style={styles.iconContainer}>
    <Icon as={FontAwesome} name="handshake-o" size={19} color={violetColor} />
  </Stack>
);
export const IconFemale = () => (
  <Stack style={styles.iconContainer}>
    <Icon as={Fontisto} name="female" size={19} color={violetColor} />
  </Stack>
);
// FD Icons
export const IconMask = () => (
  <Stack style={styles.iconContainer}>
    <Icon
      as={FontAwesome5}
      name="theater-masks"
      size={19}
      color={violetColor}
    />
  </Stack>
);
export const IconChild = () => (
  <Stack style={styles.iconContainer}>
    <Icon
      as={MaterialIcons}
      name="child-friendly"
      size={19}
      color={violetColor}
    />
  </Stack>
);
export const IconInnocent = () => (
  <Stack style={styles.iconContainer}>
    <Icon as={Octicons} name="eye-closed" size={19} color={violetColor} />
  </Stack>
);
export const IconSchool = () => (
  <Stack style={styles.iconContainer}>
    <Icon as={Ionicons} name="ios-school" size={19} color={violetColor} />
  </Stack>
);
// WS Icons
export const IconLiterature = () => (
  <Stack style={styles.iconContainer}>
    <Icon as={FontAwesome} name="book" size={19} color={violetColor} />
  </Stack>
);
export const IconFight = () => (
  <Stack style={styles.iconContainer}>
    <Icon
      as={MaterialCommunityIcons}
      name="tank"
      size={19}
      color={violetColor}
    />
  </Stack>
);
export const IconVillage = () => (
  <Stack style={styles.iconContainer}>
    <Icon as={Fontisto} name="holiday-village" size={19} color={violetColor} />
  </Stack>
);
export const IconDown = () => (
  <Stack style={styles.iconContainer}>
    <Icon
      as={MaterialCommunityIcons}
      name="trending-down"
      size={19}
      color={violetColor}
    />
  </Stack>
);
export const IconDance = () => (
  <Stack style={styles.iconContainer}>
    <Icon
      as={MaterialCommunityIcons}
      name="human-male-female"
      size={19}
      color={violetColor}
    />
  </Stack>
);
const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 3,
    marginTop: 0,
  },
});
