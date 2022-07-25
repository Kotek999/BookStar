import * as React from "react";
import { SafeAreaView } from "react-native";
import WebRule from "../../common/RulesOfDevices/ruleWEB";

const Dziady = () => {
  return (
    <SafeAreaView styles={{ flex: 1 }}>
      <WebRule isCardDZIII={true} />
    </SafeAreaView>
  );
};

export default Dziady;
