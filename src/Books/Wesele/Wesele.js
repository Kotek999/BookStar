import * as React from "react";
import { SafeAreaView } from "react-native";
import WebRule from "../../common/RulesOfDevices/ruleWEB";

const Wesele = () => {
  return (
    <SafeAreaView styles={{ flex: 1 }}>
      <WebRule isCardWS={true} />
    </SafeAreaView>
  );
};

export default Wesele;
