
import * as React from 'react';
import { Stack, Heading, Text, ScrollView, Image } from 'native-base';
import { StyleSheet, Dimensions, View } from 'react-native';
import { dataPT } from '../../Books/DataBooks/dataPT';
import { WebDivider } from '../BookDivider/WebDivider';
import MapThemes from '../Maps/MapThemes';
import MapHeroes from '../Maps/MapHeroes';
import TimeWrapper from '../Time/TimeWrapper';
import isWEB from '../Resolutions/isWEB';
import imagePT_right from '../../assets/imagePT_right.jpeg';
import imagePT_left from '../../assets/imagePT_left.jpeg';


export default function StackContainer() {

    const DimensionsHeight = Dimensions.get('window').height

    // function searchDataBooks(searchText) {
    //     return dataBooks.filter(entry => entry.themes.some(item => item.icon.includes(searchText)));
    // }

    // console.log(searchDataBooks("ikonka xD"))

    return (
        <ScrollView
            style={styles.scroll}
        >
            <Stack
                p="4"
                space={3}
                padding={6}
            >
                <Stack
                    space={2}
                >
                    <Heading
                        size="md"
                        ml="-1"
                    >
                        {dataPT.map((item, id) => (
                            <Text
                                key={`card-${id + 1}`}
                            >
                                {item.titlePT}
                            </Text>
                        ))}
                    </Heading>
                    <Text
                        fontSize="xs"
                        _light={{
                            color: "violet.500"
                        }}
                        _dark={{
                            color: "violet.400"
                        }}
                        fontWeight="500"
                        ml="-1"
                        mt="-1"
                    >
                        {dataPT.map((item, author) => (
                            <React.Fragment
                                key={author}
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
                                    {item.authorTextPT} {""}
                                </Text>
                                {item.authorPT}
                            </React.Fragment>
                        ))}
                    </Text>
                </Stack>
                <Stack
                    alignItems="center"
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
                    alignItems="center"
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
                
                <View style={styles.verticleLine_one}>
                    <Image
                        source={imagePT_left}
                        alt="jacekSoplica_image"
                        width="150"
                        height="70"
                        padding={50}
                    >
                    </Image>
                    <Stack style={styles.verticleLine_two}></Stack>
                    <Image
                        source={imagePT_right}
                        alt="ojczyzna_image"
                        width="150"
                        height="70"
                        padding={50}
                    >
                    </Image>
                </View>
                <Stack
                    alignItems="center"
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
                    alignItems="center"
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
                <Stack
                    alignItems="flex-end"
                >
                    <Text
                        fontSize="xs"
                        _light={{
                            color: "violet.500"
                        }}
                        _dark={{
                            color: "violet.400"
                        }}
                        fontWeight="500"
                        ml="-1"
                        mt="-1"
                    >
                        {dataPT.map((item, date) => (
                            <React.Fragment
                                key={date}
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
                                    {item.dateTitlePT}
                                </Text>
                                {item.datePT}
                            </React.Fragment>
                        ))}
                    </Text>
                </Stack>
                <WebDivider />
                <MapThemes isThemesPT={true} />
                <MapHeroes isHeroesPT={true} />
                {(isWEB() && DimensionsHeight > 700) ? (
                    <TimeWrapper isMarginExist={false} />
                ) : (
                    <TimeWrapper isMarginExist={true} />
                )}
            </Stack>
        </ScrollView>
    );
};

const DimensionsHeight = Dimensions.get('window').height;
const marginTB = 40;
const marginLogo = 130;

const styles = StyleSheet.create({
    scroll: {
        marginTop: DimensionsHeight / marginLogo,
        marginBottom: DimensionsHeight / marginTB,
        padding: 0,
        backgroundColor: "white"
    },
    verticleLine_one: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    verticleLine_two: {
        height: 100,
        width: 1,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#909090',
    }
})