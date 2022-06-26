import * as React from 'react';
import { StyleSheet } from 'react-native';
import { dataCommon } from '../../Books/DataBooks/dataCommon';
import { Stack, Heading, Text } from 'native-base';
import { dataPT } from '../../Books/DataBooks/dataPT';
import { dataDZIII } from '../../Books/DataBooks/dataDZIII';

export default function MapHeroes(props) {
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
            {props.isHeroesPT ? (
                <>
                    {dataPT.map((item, heoresPT) => {
                        return (
                            <Stack
                                key={heoresPT}
                                flexDirection="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                alignContent="flex-start"
                            >
                                {item.mainHeroes.map((mainHeroes, mainHeroesPT) => (
                                    <Stack
                                        key={mainHeroesPT}
                                        flexDirection="row"
                                        marginTop={4}
                                    >
                                        <Stack>
                                            {mainHeroes.listIconPT}
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
                </>
            ) : (
                null)
            }
            {props.isHeroesDZIII ? (
                <>
                    {dataDZIII.map((item, heoresDZIII) => {
                        return (
                            <Stack
                                key={heoresDZIII}
                                marginBottom={5}
                            >
                                {item.mainHeroes.map((mainHeroes, mainHeroesDZIII) => (
                                    <Stack
                                        key={mainHeroesDZIII}
                                        flexDirection="row"
                                        marginTop={4}
                                    >
                                        <Stack>
                                            {mainHeroes.listIconDZIII}
                                        </Stack>
                                        <Stack>
                                            <Text
                                                style={styles.heroesTitle}
                                            >
                                                {mainHeroes.nameDZIII}
                                            </Text>
                                            <Text
                                                style={styles.heroesContent}
                                            >
                                                {mainHeroes.contentDZIII}
                                            </Text>
                                        </Stack>
                                    </Stack>
                                ))}
                            </Stack>
                        )
                    })}
                </>
            ) : (
                null
            )}
            {props.isHeroesLL ? (
                <Heading>Bohateriowie -  Lalka</Heading>
            ) : (
                null
            )}
            {props.isHeroesFD ? (
                <Heading>Bohateriowie - Ferdydurke</Heading>
            ) : (
                null
            )}
            {props.isHeroesWS ? (
                <Heading>Bohateriowie -  Wesele</Heading>
            ) : (
                null
            )}
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