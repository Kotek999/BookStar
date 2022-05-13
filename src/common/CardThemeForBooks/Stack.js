
import * as React from 'react';
import { Stack, HStack, Heading, Text } from 'native-base';
import { dataBooks } from '../../Books/DataBooks/data';
import Time from '../Time/Time';

export default function StackContainer() {

    const start = new Date(2011, 2, 5);
    const end   = new Date(2011, 5, 5);
    const range = moment.range(start, end);

    range.diff('months'); // 3
    range.diff('days');   // 92
    range.diff();         // 7945200000

    return (
            <Stack
                p="4"
                space={3}
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
                <HStack
                    alignItems="center"
                    space={4}
                    justifyContent="flex-end"
                >
                    <HStack
                        alignItems="center"
                    >
                        <Text
                            color="coolGray.600"
                            _dark={{
                                color: "warmGray.200"
                            }}
                            fontWeight="400">
                             Godzina: {diff}
                        </Text>
                    </HStack>
                </HStack>
            </Stack>
    );
};
