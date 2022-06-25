import * as React from 'react';
import { StyleSheet } from 'react-native';
import { dataBooks } from '../../Books/DataBooks/data';
import { dataCommon } from '../../Books/DataBooks/dataCommon';
import { Stack, Heading, Text } from 'native-base';

export default function MapThemes(props) {
    return (
        <>
            {props.isThemesPT ? (
                <Stack>
                    <Heading
                        fontSize="xl"
                    >
                        {dataCommon.titleThemes}
                    </Heading>
                    <Stack
                        flexDirection="row"
                        marginTop={5}
                    >
                        {dataBooks.map((item, dataPT) => {
                            return (
                                <Stack
                                    key={dataPT}
                                >
                                    {item.themes.map((themes, themesPT) => (
                                        <Stack
                                            key={themesPT}
                                            flexDirection="column"
                                        >
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconPT}
                                                {themes.typePT}
                                            </Text>
                                        </Stack>
                                    ))}
                                </Stack>
                            )
                        })}
                    </Stack>
                </Stack>
            ) : (
                null)
            }
            {props.isThemesDZIII ? (
                <Stack>
                    <Heading
                        fontSize="xl"
                    >
                        {dataCommon.titleThemes}
                    </Heading>
                    <Stack
                        flexDirection="row"
                        marginTop={5}
                    >
                        {dataBooks.map((item, dataDZIII) => {
                            return (
                                <Stack
                                    key={dataDZIII}
                                >
                                    {item.themes.map((themes, themesDZIII) => (
                                        <Stack
                                            key={themesDZIII}
                                            flexDirection="column"
                                        >
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconDZIII}
                                                {themes.typeDZIII}
                                            </Text>
                                        </Stack>
                                    ))}
                                </Stack>
                            )
                        })}
                    </Stack>
                </Stack>
            ) : (
                null
            )}
            {props.isThemesLL ? (
                <Heading>Lalka</Heading>
            ) : (
                null
            )}
            {props.isThemesFD ? (
                <Heading>Ferdydurke</Heading>
            ) : (
                null
            )}
            {props.isThemesWS ? (
                <Heading>Wesele</Heading>
            ) : (
                null
            )}
        </>
    );
}
const styles = StyleSheet.create({
    themesTitle: {
        fontSize: 14,
        letterSpacing: 0.5,
        fontWeight: "500",
    },
})