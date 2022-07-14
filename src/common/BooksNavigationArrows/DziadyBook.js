import * as React from "react";
import RightArrowIconEntypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { pinkNavigateArrowColor } from "../Colors/colors";
import routes from "../../routing/routes";

const DziadyBook = () => {
  const navigation = useNavigation();

  return (
    <RightArrowIconEntypo
      name="paper-plane"
      size={24}
      color={pinkNavigateArrowColor}
      onPress={() =>
        navigation.navigate({
          name: routes.Dziady,
          screen: "Dziady",
        })
      }
    />
  );
};

export default DziadyBook;
