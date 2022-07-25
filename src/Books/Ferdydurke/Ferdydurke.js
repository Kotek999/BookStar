import * as React from "react";
import { SafeAreaView } from "react-native";
import WebRule from "../../common/RulesOfDevices/ruleWEB";

const Ferdydurke = () => {
  return (
    <SafeAreaView styles={{ flex: 1 }}>
      <WebRule isCardFD={true} />
    </SafeAreaView>
  );
};

export default Ferdydurke;
