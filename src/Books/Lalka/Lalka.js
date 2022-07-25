import * as React from "react";
import { SafeAreaView } from "react-native";
import WebRule from "../../common/RulesOfDevices/ruleWEB";

const Lalka = () => {
  return (
    <SafeAreaView styles={{ flex: 1 }}>
      <WebRule isCardLL={true} />
    </SafeAreaView>
  );
};

export default Lalka;
