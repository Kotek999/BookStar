import * as React from "react";
import RightArrowIconEntypo from "react-native-vector-icons/Entypo";
import BackArrowIconMaterial from "react-native-vector-icons/MaterialIcons";
import routes from "../../routing/routes";
import { pinkNavigateArrowColor } from "../Colors/colors";
import { useNavigation } from "@react-navigation/native";
import { View } from "native-base";

const ArrowIcon = (props) => {
  const navigation = useNavigation();

  return (
    <>
      {props.isBack ? (
        <View marginTop={2}>
          <BackArrowIconMaterial
            name="arrow-back-ios"
            size={24}
            color={pinkNavigateArrowColor}
            onPress={() => navigation.navigate(routes.BooksChoice)}
          />
        </View>
      ) : (
        <View marginTop={0}>
          <RightArrowIconEntypo
            name="paper-plane"
            size={24}
            color={pinkNavigateArrowColor}
          />
        </View>
      )}
    </>
  );
};

export default ArrowIcon;
