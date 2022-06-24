
import * as React from 'react';
import { Stack, Heading, Text, ScrollView } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
import { dataBooks } from '../../../Books/DataBooks/data';
import { WebDivider } from '../../../common/BookDivider/WebDivider';
import MapThemes from '../../../common/Maps/MapThemes';
import MapHeroes from '../../../common/Maps/MapHeroes';
import TimeWrapper from '../../../common/Time/TimeWrapper';
import isWEB from '../../../common/Resolutions/isWEB';

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
                        {dataBooks.map((item, id) => (
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
                        {dataBooks.map((item, author) => (
                            <React.Fragment
                                key={author}
                            >
                                <Text
                                    _light={{
                                        color: "#afb0b3"
                                    }}
                                    _dark={{
                                        color: "gray.400"
                                    }}
                                >
                                    {item.authorText} {""}
                                </Text>
                                {item.authorPT}
                            </React.Fragment>
                        ))}
                    </Text>
                </Stack>
                <Text
                    margin={0}
                    color="black"
                    letterSpacing={1}
                    fontSize="sm"
                >
                    {dataBooks.map((item, content) => (
                        <React.Fragment
                            key={content}
                        >
                            {item.contentPT}
                        </React.Fragment>
                    ))}
                </Text>
                <Text
                    textAlign="right"
                    fontSize="xs"
                    _light={{
                        color: "#87888a"
                    }}
                    _dark={{
                        color: "gray.400"
                    }}

                >
                    {dataBooks.map((item, date) => (
                        <React.Fragment
                            key={date}
                        >
                            {item.datePT}
                        </React.Fragment>
                    ))}
                </Text>
                <WebDivider />
                <MapThemes isThemesLL={true}/>
                <MapHeroes isHeroesLL={true}/>
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
        height: DimensionsHeight,
        marginTop: DimensionsHeight / marginLogo,
        marginBottom: DimensionsHeight / marginTB,
        padding: 0,
        backgroundColor: "white"
    },
})