import * as React from "react";
import RightArrowIconEntypo from "react-native-vector-icons/Entypo";
import routes from "../../routing/routes";
import { pinkNavigateArrowColor } from "../Colors/colors";
import { useNavigation } from "@react-navigation/native";

const ArrowIcon = () => {

  // const navigation = useNavigation();

  return (
    <RightArrowIconEntypo
      name="paper-plane"
      size={24}
      color={pinkNavigateArrowColor}
      // onPress={() => navigation.navigate(routes.BooksChoice)}
    />
  );
};

export default ArrowIcon;
