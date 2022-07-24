import * as React from "react";
import { Stack, Heading, Text, ScrollView } from "native-base";
import { StyleSheet } from "react-native";
import { dataDZIII } from "../../DataBooks/dataDZIII";
import { WebDivider } from "../../../common/StarDivider/WebDivider";
import { DimensionsHeight } from "../../../common/Dimensions/Dimensions";
import {
  violetColor,
  violetDarkColor,
  grayTitleColor,
  grayTitleDarkColor,
  whiteColor,
} from "../../../common/Colors/colors";
import MapMainContent from "../../../common/Maps/MapMainContent";
import MapThemes from "../../../common/Maps/MapThemes";
import MapHeroes from "../../../common/Maps/MapHeroes";
import TimeWrapper from "../../../common/Time/TimeWrapper";
import isWEB from "../../../common/Resolutions/isWEB";

export default function StackContainer() {
  return (
    <ScrollView style={styles.scroll}>
      <Stack p="4" space={3} padding={6}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {dataDZIII.map((item, id) => (
              <Text key={`card-${id + 1}`}>{item.titleDZIII}</Text>
            ))}
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: violetColor,
            }}
            _dark={{
              color: violetDarkColor,
            }}
            fontWeight="500"
            ml="-1"
            mt="-1"
          >
            {dataDZIII.map((item, author) => (
              <React.Fragment key={author}>
                <Text
                  _light={{
                    color: grayTitleColor,
                  }}
                  _dark={{
                    color: grayTitleDarkColor,
                  }}
                >
                  {item.authorTextDZIII} {""}
                </Text>
                {item.authorDZIII}
              </React.Fragment>
            ))}
          </Text>
        </Stack>
        <MapMainContent isMainContentDZIII={true} />
        <Stack alignItems="flex-end">
          <Text
            fontSize="xs"
            _light={{
              color: violetColor,
            }}
            _dark={{
              color: violetDarkColor,
            }}
            fontWeight="500"
            mr="1"
            mt="-1"
          >
            {dataDZIII.map((item, date) => (
              <React.Fragment key={date}>
                <Text
                  fontSize="xs"
                  _light={{
                    color: grayTitleColor,
                  }}
                  _dark={{
                    color: grayTitleDarkColor,
                  }}
                >
                  {item.dateTitleDZIII}
                </Text>
                {item.dateDZIII}
              </React.Fragment>
            ))}
          </Text>
        </Stack>
        <WebDivider />
        <MapThemes isThemesDZIII={true} />
        <MapHeroes isHeroesDZIII={true} />
        {isWEB() && DimensionsHeight > 700 ? (
          <TimeWrapper isMarginExist={false} />
        ) : (
          <TimeWrapper isMarginExist={true} />
        )}
      </Stack>
    </ScrollView>
  );
}

const marginTB = 40;

const styles = StyleSheet.create({
  scroll: {
    marginTop: -1,
    marginBottom: DimensionsHeight / marginTB,
    padding: 0,
    backgroundColor: whiteColor,
  },
});
