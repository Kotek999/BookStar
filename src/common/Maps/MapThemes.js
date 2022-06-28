import * as React from 'react';
import { StyleSheet } from 'react-native';
import { dataCommon } from '../../Books/DataBooks/dataCommon';
import { Stack, Heading, Text } from 'native-base';
import { dataPT } from '../../Books/DataBooks/dataPT';
import { dataDZIII } from '../../Books/DataBooks/dataDZIII';
import { dataLL } from '../../Books/DataBooks/dataLL';

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
                        {dataPT.map((item, dataPT) => {
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
                        {dataDZIII.map((item, dataDZIII) => {
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
                        {dataLL.map((item, dataLL) => {
                            return (
                                <Stack
                                    key={dataLL}
                                >
                                    {item.themes.map((themes, themesLL) => (
                                        <Stack
                                            key={themesLL}
                                            flexDirection="column"
                                        >
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconLL}
                                                {themes.typeLL}
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