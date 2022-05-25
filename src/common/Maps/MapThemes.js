import * as React from 'react';
import { StyleSheet } from 'react-native';
import { dataBooks } from '../../Books/DataBooks/data';
import { dataCommon } from '../../Books/DataBooks/dataCommon';
import { Stack, Heading, Text } from 'native-base';

export default function MapThemes() {

    return (
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
    );

};

const styles = StyleSheet.create({
    themesTitle: {
        fontSize: 14,
        letterSpacing: 0.5,
        fontWeight: "500",
    },
})