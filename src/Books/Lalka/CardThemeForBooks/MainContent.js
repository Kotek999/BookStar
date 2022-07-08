
import * as React from 'react';
import { Stack, Text, Image } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { dataLL } from '../../DataBooks/dataLL';
import imageLL_right from '../../../assets/imageLL_right.jpeg';
import imageLL_left from '../../../assets/imageLL_left.jpeg';

export default function MainContent() {

    return (
        <Stack>
            <View
                style={styles.themeAndImage}
            >
                <Stack
                    style={styles.columnContainer}
                >
                    <Stack
                        style={styles.endContainer}
                    >
                        <Text
                            ml="1"
                            mt="-1"
                        >
                            {dataLL.map((item, content_One) => (
                                <React.Fragment
                                    key={content_One}
                                >
                                    <Text
                                        fontSize="xs"
                                        _light={{
                                            color: "#87888a"
                                        }}
                                        _dark={{
                                            color: "gray.400"
                                        }}
                                    >
                                        {item.contentThemeLL}
                                    </Text>
                                </React.Fragment>
                            ))}
                        </Text>
                    </Stack>
                    <Stack
                        style={styles.placeContainer}
                    >
                        <Text
                            fontWeight="bold"
                            ml="-1"
                            mt="1"
                        >

                            {dataLL.map((item, mostImportantThemeLL_One) => (
                                <React.Fragment
                                    key={mostImportantThemeLL_One}
                                >
                                    {item.mostImportantThemeLL}
                                </React.Fragment>
                            ))}
                        </Text>
                    </Stack>
                </Stack>
                <Stack
                    style={styles.marginLeftContainer}
                >
                    <Stack style={styles.imageShadowContainer}>
                        <Image
                            style={styles.image}
                            source={imageLL_right}
                            alt="praca_image"
                            ml="-1"
                            mt="0"
                        >
                        </Image>
                    </Stack>
                </Stack>
            </View>
            <View
                style={styles.themeAndImage}
            >
                <Stack
                    style={styles.marginRightContainer}
                >
                    <Stack style={styles.imageShadowContainer}>
                        <Image
                            style={styles.image}
                            source={imageLL_left}
                            alt="stanislawWokulski_image"
                            ml="-1"
                            mt="0"
                        >
                        </Image>
                    </Stack>
                </Stack>
                <Stack style={styles.columnContainer}>
                    <Stack
                        style={styles.endContainer}
                    >
                        <Text
                            ml="-1"
                            mt="-1"
                        >
                            {dataLL.map((item, content_Two) => (
                                <React.Fragment
                                    key={content_Two}
                                >
                                    <Text
                                        fontSize="xs"
                                        _light={{
                                            color: "#87888a"
                                        }}
                                        _dark={{
                                            color: "gray.400"
                                        }}
                                    >
                                        {item.contentHeroLL}
                                    </Text>
                                </React.Fragment>
                            ))}
                        </Text>
                    </Stack>
                    <Stack
                        style={styles.placeContainer}
                    >
                        <Text
                            fontWeight="bold"
                            ml="-1"
                            mt="1"
                        >
                            {dataLL.map((item, mostImportantThemeLL_Two) => (
                                <React.Fragment
                                    key={mostImportantThemeLL_Two}
                                >
                                    {item.mostImportantHeroLL}
                                </React.Fragment>
                            ))}
                        </Text>
                    </Stack>
                </Stack>
            </View>
        </Stack>
    );
};

const styles = StyleSheet.create({
    themeAndImage: {
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'row',
        width: '100%',
    },
    columnContainer: {
        flexDirection: "column",
    },
    endContainer: {
        alignItems: "flex-end",
    },
    placeContainer: {
        alignItems: "center",
        top: 2,
    },
    marginRightContainer: {
        marginRight: "15%",
    },
    marginLeftContainer: {
        marginLeft: "20%",
    },
    image: {
        width: 150,
        height: 70,
        padding: 50,
        borderRadius: 10,
    },
    imageShadowContainer: {
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.5,
    }
})