import * as React from "react";
import { Stack, Text, Image } from "native-base";
import { StyleSheet, View } from "react-native";
import { dataPT } from "../../Books/DataBooks/dataPT";
import { dataDZIII } from "../../Books/DataBooks/dataDZIII";
import { dataLL } from "../../Books/DataBooks/dataLL";
import { dataFD } from "../../Books/DataBooks/dataFD";
import { dataWS } from "../../Books/DataBooks/dataWS";
import { dataImage } from "./DataImage";
import imagePT_right from "../../assets/imagePT_right.jpeg";
import imagePT_left from "../../assets/imagePT_left.jpeg";
import imageDZIII_right from "../../assets/imageDZIII_right.jpeg";
import imageDZIII_left from "../../assets/imageDZIII_left.jpeg";
import imageLL_right from "../../assets/imageLL_right.jpeg";
import imageLL_left from "../../assets/imageLL_left.jpeg";
import imageFD_right from "../../assets/imageFD_right.jpeg";
import imageFD_left from "../../assets/imageFD_left.jpeg";
import imageWS_right from "../../assets/imageWS_right.jpeg";
import imageWS_left from "../../assets/imageWS_left.jpeg";
import { grayTitleColor, grayTitleDarkColor } from "../Colors/colors";

export default function MapMainContent(props) {
  return (
    <Stack>
      {props.isMainContentPT && (
        <>
          <View style={styles.themeAndImage}>
            <Stack style={styles.columnContainer}>
              <Stack style={styles.endContainer}>
                <Text>
                  {dataPT.map((item, content_One) => (
                    <React.Fragment key={content_One}>
                      <Text
                        fontSize="xs"
                        _light={{
                          color: grayTitleColor,
                        }}
                        _dark={{
                          color: grayTitleDarkColor,
                        }}
                      >
                        {item.contentThemePT}
                      </Text>
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
              <Stack style={styles.placeContainer}>
                <Text fontWeight="bold" mt="1">
                  {dataPT.map((item, mostImportantThemePT_One) => (
                    <React.Fragment key={mostImportantThemePT_One}>
                      {item.mostImportantThemePT}
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
            </Stack>
            <Stack style={styles.marginLeftContainer}>
              <Image
                style={styles.image}
                source={imagePT_right}
                alt={dataImage.alt_One_PT}
              ></Image>
            </Stack>
          </View>
          <View style={styles.themeAndImage}>
            <Stack style={styles.marginRightContainer}>
              <Image
                style={styles.image}
                source={imagePT_left}
                alt={dataImage.alt_Two_PT}
              ></Image>
            </Stack>
            <Stack style={styles.columnContainer}>
              <Stack style={styles.endContainer}>
                <Text>
                  {dataPT.map((item, content_Two) => (
                    <React.Fragment key={content_Two}>
                      <Text
                        fontSize="xs"
                        _light={{
                          color: grayTitleColor,
                        }}
                        _dark={{
                          color: grayTitleDarkColor,
                        }}
                      >
                        {item.contentHeroPT}
                      </Text>
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
              <Stack style={styles.placeContainer}>
                <Text fontWeight="bold" mt="1">
                  {dataPT.map((item, mostImportantThemePT_Two) => (
                    <React.Fragment key={mostImportantThemePT_Two}>
                      {item.mostImportantHeroPT}
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
            </Stack>
          </View>
        </>
      )}
      {props.isMainContentDZIII && (
        <>
          <View style={styles.themeAndImage}>
            <Stack style={styles.columnContainer}>
              <Stack style={styles.endContainer}>
                <Text>
                  {dataDZIII.map((item, content_One) => (
                    <React.Fragment key={content_One}>
                      <Text
                        fontSize="xs"
                        _light={{
                          color: grayTitleColor,
                        }}
                        _dark={{
                          color: grayTitleDarkColor,
                        }}
                      >
                        {item.contentThemeDZIII}
                      </Text>
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
              <Stack style={styles.placeContainer}>
                <Text fontWeight="bold" mt="1">
                  {dataDZIII.map((item, mostImportantThemeDZIII_One) => (
                    <React.Fragment key={mostImportantThemeDZIII_One}>
                      {item.mostImportantThemeDZIII}
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
            </Stack>
            <Stack style={styles.marginLeftContainer}>
              <Image
                style={styles.image}
                source={imageDZIII_right}
                alt={dataImage.alt_One_DZIII}
              ></Image>
            </Stack>
          </View>
          <View style={styles.themeAndImage}>
            <Stack style={styles.marginRightContainer}>
              <Image
                style={styles.image}
                source={imageDZIII_left}
                alt={dataImage.alt_Two_DZIII}
              ></Image>
            </Stack>
            <Stack style={styles.columnContainer}>
              <Stack style={styles.endContainer}>
                <Text>
                  {dataDZIII.map((item, content_Two) => (
                    <React.Fragment key={content_Two}>
                      <Text
                        fontSize="xs"
                        _light={{
                          color: grayTitleColor,
                        }}
                        _dark={{
                          color: grayTitleDarkColor,
                        }}
                      >
                        {item.contentHeroDZIII}
                      </Text>
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
              <Stack style={styles.placeContainer}>
                <Text fontWeight="bold" mt="1">
                  {dataDZIII.map((item, mostImportantThemeDZIII_Two) => (
                    <React.Fragment key={mostImportantThemeDZIII_Two}>
                      {item.mostImportantHeroDZIII}
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
            </Stack>
          </View>
        </>
      )}
      {props.isMainContentLL && (
        <>
          <View style={styles.themeAndImage}>
            <Stack style={styles.columnContainer}>
              <Stack style={styles.endContainer}>
                <Text>
                  {dataLL.map((item, content_One) => (
                    <React.Fragment key={content_One}>
                      <Text
                        fontSize="xs"
                        _light={{
                          color: grayTitleColor,
                        }}
                        _dark={{
                          color: grayTitleDarkColor,
                        }}
                      >
                        {item.contentThemeLL}
                      </Text>
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
              <Stack style={styles.placeContainer}>
                <Text fontWeight="bold" mt="1">
                  {dataLL.map((item, mostImportantThemeLL_One) => (
                    <React.Fragment key={mostImportantThemeLL_One}>
                      {item.mostImportantThemeLL}
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
            </Stack>
            <Stack style={styles.marginLeftContainer}>
              <Image
                style={styles.image}
                source={imageLL_right}
                alt={dataImage.alt_One_LL}
              ></Image>
            </Stack>
          </View>
          <View style={styles.themeAndImage}>
            <Stack style={styles.marginRightContainer}>
              <Image
                style={styles.image}
                source={imageLL_left}
                alt={dataImage.alt_Two_LL}
              ></Image>
            </Stack>
            <Stack style={styles.columnContainer}>
              <Stack style={styles.endContainer}>
                <Text>
                  {dataLL.map((item, content_Two) => (
                    <React.Fragment key={content_Two}>
                      <Text
                        fontSize="xs"
                        _light={{
                          color: grayTitleColor,
                        }}
                        _dark={{
                          color: grayTitleDarkColor,
                        }}
                      >
                        {item.contentHeroLL}
                      </Text>
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
              <Stack style={styles.placeContainer}>
                <Text fontWeight="bold" mt="1">
                  {dataLL.map((item, mostImportantThemeLL_Two) => (
                    <React.Fragment key={mostImportantThemeLL_Two}>
                      {item.mostImportantHeroLL}
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
            </Stack>
          </View>
        </>
      )}
      {props.isMainContentFD && (
        <>
          <View style={styles.themeAndImage}>
            <Stack style={styles.columnContainer}>
              <Stack style={styles.endContainer}>
                <Text>
                  {dataFD.map((item, content_One) => (
                    <React.Fragment key={content_One}>
                      <Text
                        fontSize="xs"
                        _light={{
                          color: grayTitleColor,
                        }}
                        _dark={{
                          color: grayTitleDarkColor,
                        }}
                      >
                        {item.contentThemeFD}
                      </Text>
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
              <Stack style={styles.placeContainer}>
                <Text fontWeight="bold" mt="1">
                  {dataFD.map((item, mostImportantThemeFD_One) => (
                    <React.Fragment key={mostImportantThemeFD_One}>
                      {item.mostImportantThemeFD}
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
            </Stack>
            <Stack style={styles.marginLeftContainer}>
              <Image
                style={styles.image}
                source={imageFD_right}
                alt={dataImage.alt_One_FD}
              ></Image>
            </Stack>
          </View>
          <View style={styles.themeAndImage}>
            <Stack style={styles.marginRightContainer}>
              <Image
                style={styles.image}
                source={imageFD_left}
                alt={dataImage.alt_Two_FD}
              ></Image>
            </Stack>
            <Stack style={styles.columnContainer}>
              <Stack style={styles.endContainer}>
                <Text>
                  {dataFD.map((item, content_Two) => (
                    <React.Fragment key={content_Two}>
                      <Text
                        fontSize="xs"
                        _light={{
                          color: grayTitleColor,
                        }}
                        _dark={{
                          color: grayTitleDarkColor,
                        }}
                      >
                        {item.contentHeroFD}
                      </Text>
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
              <Stack style={styles.placeContainer}>
                <Text fontWeight="bold" mt="1">
                  {dataFD.map((item, mostImportantThemeFD_Two) => (
                    <React.Fragment key={mostImportantThemeFD_Two}>
                      {item.mostImportantHeroFD}
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
            </Stack>
          </View>
        </>
      )}
      {props.isMainContentWS && (
        <>
          <View style={styles.themeAndImage}>
            <Stack style={styles.columnContainer}>
              <Stack style={styles.endContainer}>
                <Text>
                  {dataWS.map((item, content_One) => (
                    <React.Fragment key={content_One}>
                      <Text
                        fontSize="xs"
                        _light={{
                          color: grayTitleColor,
                        }}
                        _dark={{
                          color: grayTitleDarkColor,
                        }}
                      >
                        {item.contentThemeWS}
                      </Text>
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
              <Stack style={styles.placeContainer}>
                <Text fontWeight="bold" mt="1">
                  {dataWS.map((item, mostImportantThemeWS_One) => (
                    <React.Fragment key={mostImportantThemeWS_One}>
                      {item.mostImportantThemeWS}
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
            </Stack>
            <Stack style={styles.marginLeftContainer}>
              <Image
                style={styles.image}
                source={imageWS_right}
                alt={dataImage.alt_One_WS}
              ></Image>
            </Stack>
          </View>
          <View style={styles.themeAndImage}>
            <Stack style={styles.marginRightContainer}>
              <Image
                style={styles.image}
                source={imageWS_left}
                alt={dataImage.alt_Two_WS}
              ></Image>
            </Stack>
            <Stack style={styles.columnContainer}>
              <Stack style={styles.endContainer}>
                <Text>
                  {dataWS.map((item, content_Two) => (
                    <React.Fragment key={content_Two}>
                      <Text
                        fontSize="xs"
                        _light={{
                          color: grayTitleColor,
                        }}
                        _dark={{
                          color: grayTitleDarkColor,
                        }}
                      >
                        {item.contentHeroWS}
                      </Text>
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
              <Stack style={styles.placeContainer}>
                <Text fontWeight="bold" mt="1">
                  {dataWS.map((item, mostImportantThemeWS_Two) => (
                    <React.Fragment key={mostImportantThemeWS_Two}>
                      {item.mostImportantHeroWS}
                    </React.Fragment>
                  ))}
                </Text>
              </Stack>
            </Stack>
          </View>
        </>
      )}
    </Stack>
  );
}

const styles = StyleSheet.create({
  themeAndImage: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },
  columnContainer: {
    flexDirection: "column",
  },
  endContainer: {
    alignItems: "flex-end",
    marginLeft: 20,
    marginRight: 20,
  },
  placeContainer: {
    alignItems: "center",
    top: 2,
  },
  marginRightContainer: {
    marginRight: "5%",
  },
  marginLeftContainer: {
    marginLeft: "5%",
  },
  image: {
    width: 150,
    height: 70,
    padding: 50,
    borderRadius: 10,
  },
});
