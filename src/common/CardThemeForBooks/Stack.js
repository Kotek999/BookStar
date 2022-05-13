
import * as React from 'react';
import { Stack, HStack, Heading, Text } from 'native-base';
import { dataBooks } from '../../Books/DataBooks/data';


export default function StackContainer(props) {

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
                        <Text key={`card-${id + 1}`}>{item.titlePT}</Text>
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
                    ml="-0.5"
                    mt="-1"
                >
                    The Silicon Valley of India.
                </Text>
            </Stack>
            <Text
                fontWeight="400"
            >
                Bengaluru (also called Bangalore) is the center of India's high-tech
                industry. The city is also known for its parks and nightlife.
            </Text>
            <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
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
                        6 mins ago
                    </Text>
                </HStack>
            </HStack>
        </Stack>
    );
};
