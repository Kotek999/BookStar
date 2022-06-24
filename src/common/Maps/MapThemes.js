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
                                                {themes.iconArkadii}
                                                {themes.typeArkadii}
                                            </Text>
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconMiłość}
                                                {themes.typeMiłość}
                                            </Text>
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconPrzemiana}
                                                {themes.typePrzemiana}
                                            </Text>
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconRodzina}
                                                {themes.typeRodzina}
                                            </Text>
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconOjczyzna}
                                                {themes.typeOjczyzna}
                                            </Text>
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconSzlachcic}
                                                {themes.typeSzlachcic}
                                            </Text>
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconDworek}
                                                {themes.typeDworek}
                                            </Text>
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconPrzyroda}
                                                {themes.typePrzyroda}
                                            </Text>
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconPatriotyzm}
                                                {themes.typePatriotyzm}
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
                                                {themes.iconWolność_DZIII}
                                                {themes.typeWolność_DZIII}
                                            </Text>
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconCierpienie_DZIII}
                                                {themes.typeCierpienie_DZIII}
                                            </Text>
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconPoświęcenie_DZIII}
                                                {themes.typePoświęcenie_DZIII}
                                            </Text>
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconSen_DZIII}
                                                {themes.typeSen_DZIII}
                                            </Text>
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconMiłość_DZIII}
                                                {themes.typeMiłość_DZIII}
                                            </Text>
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconPatriotyzm_DZIII}
                                                {themes.typePatriotyzm_DZIII}
                                            </Text>
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconSamotność_DZIII}
                                                {themes.typeSamotność_DZIII}
                                            </Text>
                                            <Text
                                                style={styles.themesTitle}
                                            >
                                                {themes.iconWładza_DZIII}
                                                {themes.typeWładza_DZIII}
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