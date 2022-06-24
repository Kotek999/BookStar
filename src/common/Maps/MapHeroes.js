import * as React from 'react';
import { StyleSheet } from 'react-native';
import { dataBooks } from '../../Books/DataBooks/data';
import { dataCommon } from '../../Books/DataBooks/dataCommon';
import { Stack, Heading, Text } from 'native-base';

export default function MapHeroes() {
    return (
        <Stack
            marginTop={4}
        >
            <Heading
                fontSize="xl"
                marginBottom={2}
            >
                {dataCommon.mainHeroes}
            </Heading>
            {dataBooks.map((item, heoresPT) => {
                return (
                    <Stack key={heoresPT} flexDirection="column">
                        {item.mainHeroes.map((mainHeroes, mainHeroesPT) => (
                            <Stack
                                key={mainHeroesPT}
                                flexDirection="row"
                                marginTop={4}
                            >
                                <Stack>
                                    {mainHeroes.listIcon}
                                </Stack>
                                <Stack>
                                    <Text 
                                        style={styles.heroesTitle}
                                    >
                                        {mainHeroes.namePT}
                                    </Text>
                                    <Text 
                                        style={styles.heroesContent}
                                    >
                                        {mainHeroes.contentPT}
                                    </Text>
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                )
            })}
        </Stack>
    );
};

const styles = StyleSheet.create({
    heroesTitle: {
        fontSize: 14,
        letterSpacing: 0.5,
        fontWeight: "bold",
    },
    heroesContent: {
        fontSize: 14,
        letterSpacing: 0.5,
        fontWeight: "500",
    },
})