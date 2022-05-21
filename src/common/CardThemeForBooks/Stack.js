
import * as React from 'react';
import { Stack, HStack, Heading, Text, View, Divider, ScrollView } from 'native-base';
import { Dimensions } from 'react-native';
import { dataBooks } from '../../Books/DataBooks/data';
import TimeLogic from '../Time/TimeLogic';


export default function StackContainer() {

    const DimensionsHeight = Dimensions.get('window').height
    const marginTop = 20

    // function searchDataBooks(searchText) {
    //     return dataBooks.filter(entry => entry.themes.some(item => item.icon.includes(searchText)));
    // }

    // console.log(searchDataBooks("ikonka xD"))

    return (
        <ScrollView
            maxH={DimensionsHeight / 2}
            marginTop={0}
            padding={0}
            marginBottom={DimensionsHeight / 30}
            backgroundColor="amber.300"
        >
            <Stack
                p="4"
                space={3}
                height={600}
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
                <Divider backgroundColor="violet.300" />
                <Stack>
                    <Heading
                        fontSize="xl"
                    >
                        Motywy:
                    </Heading>
                    <Stack
                        flexDirection="row"
                    >
                        {dataBooks.map(data => {
                            return (
                                <Stack>
                                    {data.themes.map(themes => (
                                        <Stack>
                                            <Text>
                                            {themes.iconArkadii}
                                            {themes.typeArkadii}
                                            </Text>
                                            <Text>
                                            {themes.iconMiłość}
                                            {themes.typeMiłość}
                                            </Text>
                                        </Stack>
                                    ))}
                                </Stack>
                            )
                        })}
                    </Stack>
                </Stack>
                <HStack
                    alignItems="center"
                    space={4}
                    justifyContent="flex-end"
                    flexDirection="column"
                >
                    <HStack
                        alignItems="center"
                        margin={2}
                    >
                        <Text
                            color="coolGray.600"
                            _dark={{
                                color: "warmGray.200"
                            }}
                            fontWeight="600"
                            fontSize={13.5}
                        >
                            Do wakacji pozostało:</Text>
                    </HStack>
                    <HStack
                        alignItems="center"
                    >
                        <Text
                            color="coolGray.600"
                            _dark={{
                                color: "warmGray.200"
                            }}
                            fontWeight="600"
                            fontSize={13.5}
                        >
                            <TimeLogic />
                        </Text>
                    </HStack>
                </HStack>
            </Stack>
        </ScrollView>
    );
};
