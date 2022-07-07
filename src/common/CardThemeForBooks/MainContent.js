
import * as React from 'react';
import { Stack, Text, Image } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { dataPT } from '../../Books/DataBooks/dataPT';
import imagePT_right from '../../assets/imagePT_right.jpeg';
import imagePT_left from '../../assets/imagePT_left.jpeg';

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
                            ml="-1"
                            mt="-1"
                        >
                            {dataPT.map((item, content_One) => (
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
                                        {item.contentThemePT}
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
                            mt="-1"
                        >

                            {dataPT.map((item, mostImportantThemePT_One) => (
                                <React.Fragment
                                    key={mostImportantThemePT_One}
                                >
                                    {item.mostImportantThemePT}
                                </React.Fragment>
                            ))}
                        </Text>
                    </Stack>
                </Stack>
                <Stack
                    style={styles.marginLeftContainer}
                >
                    <Image
                        style={styles.image}
                        source={imagePT_right}
                        alt="ojczyzna_image"
                        ml="-1"
                        mt="0"
                    >
                    </Image>
                </Stack>
            </View>
            <View
                style={styles.themeAndImage}
            >
                <Stack
                    style={styles.marginRightContainer}
                >
                    <Image
                        style={styles.image}
                        source={imagePT_left}
                        alt="jacekSoplica_image"
                        ml="-1"
                        mt="0"
                    >
                    </Image>
                </Stack>
                <Stack style={styles.columnContainer}>
                    <Stack
                        style={styles.endContainer}
                    >
                        <Text
                            ml="-1"
                            mt="-1"
                        >
                            {dataPT.map((item, content_Two) => (
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
                                        {item.contentHeroPT}
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
                            mt="-1"
                        >
                            {dataPT.map((item, mostImportantThemePT_Two) => (
                                <React.Fragment
                                    key={mostImportantThemePT_Two}
                                >
                                    {item.mostImportantHeroPT}
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
    }
})