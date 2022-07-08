
import * as React from 'react';
import { Stack, Text, Image } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { dataFD } from '../../DataBooks/dataFD';
import imageFD_right from '../../../assets/imageFD_right.jpeg';
import imageFD_left from '../../../assets/imageFD_left.jpeg';

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
                            ml="2"
                            mt="-1"
                        >
                            {dataFD.map((item, content_One) => (
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
                                        {item.contentThemeFD}
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

                            {dataFD.map((item, mostImportantThemeFD_One) => (
                                <React.Fragment
                                    key={mostImportantThemeFD_One}
                                >
                                    {item.mostImportantThemeFD}
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
                            source={imageFD_right}
                            alt="deformacja_image"
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
                            source={imageFD_left}
                            alt="józefKowalski_image"
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
                            {dataFD.map((item, content_Two) => (
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
                                        {item.contentHeroFD}
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
                            {dataFD.map((item, mostImportantThemeFD_Two) => (
                                <React.Fragment
                                    key={mostImportantThemeFD_Two}
                                >
                                    {item.mostImportantHeroFD}
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