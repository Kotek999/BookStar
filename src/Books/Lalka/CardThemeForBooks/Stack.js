import * as React from "react";
import { Stack, Heading, Text, ScrollView } from "native-base";
import { StyleSheet, Dimensions } from "react-native";
import { WebDivider } from "../../../common/BookDivider/WebDivider";
import MapMainContent from "../../../common/Maps/MapMainContent";
import MapThemes from "../../../common/Maps/MapThemes";
import MapHeroes from "../../../common/Maps/MapHeroes";
import TimeWrapper from "../../../common/Time/TimeWrapper";
import isWEB from "../../../common/Resolutions/isWEB";
import { dataLL } from "../../DataBooks/dataLL";
import {
  violetColor,
  violetDarkColor,
  grayTitleColor,
  grayTitleDarkColor,
  whiteColor,
} from "../../../common/Colors/colors";

export default function StackContainer() {
  const DimensionsHeight = Dimensions.get("window").height;

  return (
    <ScrollView style={styles.scroll}>
      <Stack p="4" space={3} padding={6}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {dataLL.map((item, id) => (
              <Text key={`card-${id + 1}`}>{item.titleLL}</Text>
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
            {dataLL.map((item, author) => (
              <React.Fragment key={author}>
                <Text
                  _light={{
                    color: grayTitleColor,
                  }}
                  _dark={{
                    color: grayTitleDarkColor,
                  }}
                >
                  {item.authorTextLL} {""}
                </Text>
                {item.authorLL}
              </React.Fragment>
            ))}
          </Text>
        </Stack>
        <MapMainContent isMainContentLL={true} />
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
            {dataLL.map((item, date) => (
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
                  {item.dateTitleLL}
                </Text>
                {item.dateLL}
              </React.Fragment>
            ))}
          </Text>
        </Stack>
        <WebDivider />
        <MapThemes isThemesLL={true} />
        <MapHeroes isHeroesLL={true} />
        {isWEB() && DimensionsHeight > 700 ? (
          <TimeWrapper isMarginExist={false} />
        ) : (
          <TimeWrapper isMarginExist={true} />
        )}
      </Stack>
    </ScrollView>
  );
}

const DimensionsHeight = Dimensions.get("window").height;
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
