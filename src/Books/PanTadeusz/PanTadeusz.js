import * as React from "react";
import { SafeAreaView } from "react-native";
import WebRule from "../../common/RulesOfDevices/ruleWEB";

const PanTadeusz = () => {
  return (
    <SafeAreaView styles={{ flex: 1 }}>
      <WebRule isCardPT={true} />
    </SafeAreaView>
  );
};

export default PanTadeusz;
