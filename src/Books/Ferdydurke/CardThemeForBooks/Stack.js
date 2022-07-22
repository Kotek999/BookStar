import * as React from "react";
import { Stack, Heading, Text, ScrollView } from "native-base";
import { StyleSheet } from "react-native";
import { WebDivider } from "../../../common/StarDivider/WebDivider";
import { DimensionsHeight } from "../../../common/Dimensions/Dimensions";
import MapMainContent from "../../../common/Maps/MapMainContent";
import MapThemes from "../../../common/Maps/MapThemes";
import MapHeroes from "../../../common/Maps/MapHeroes";
import TimeWrapper from "../../../common/Time/TimeWrapper";
import isWEB from "../../../common/Resolutions/isWEB";
import { dataFD } from "../../DataBooks/dataFD";
import {
  violetColor,
  violetDarkColor,
  grayTitleColor,
  grayTitleDarkColor,
  whiteColor,
} from "../../../common/Colors/colors";

export default function StackContainer() {
  return (
    <ScrollView style={styles.scroll}>
      <Stack p="4" space={3} padding={6}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {dataFD.map((item, id) => (
              <Text key={`card-${id + 1}`}>{item.titleFD}</Text>
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
            {dataFD.map((item, author) => (
              <React.Fragment key={author}>
                <Text
                  _light={{
                    color: grayTitleColor,
                  }}
                  _dark={{
                    color: grayTitleDarkColor,
                  }}
                >
                  {item.authorTextFD} {""}
                </Text>
                {item.authorFD}
              </React.Fragment>
            ))}
          </Text>
        </Stack>
        <MapMainContent isMainContentFD={true} />
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
            {dataFD.map((item, date) => (
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
                  {item.dateTitleFD}
                </Text>
                {item.dateFD}
              </React.Fragment>
            ))}
          </Text>
        </Stack>
        <WebDivider />
        <MapThemes isThemesFD={true} />
        <MapHeroes isHeroesFD={true} />
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
const marginLogo = 130;

const styles = StyleSheet.create({
  scroll: {
    height: DimensionsHeight,
    marginTop: DimensionsHeight / marginLogo,
    marginBottom: DimensionsHeight / marginTB,
    padding: 0,
    backgroundColor: whiteColor,
  },
});
