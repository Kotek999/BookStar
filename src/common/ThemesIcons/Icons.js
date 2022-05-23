import * as React from 'react';
import { Icon, Stack } from 'native-base';
import { StyleSheet } from 'react-native';
import {
    Entypo,
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome
} from '@expo/vector-icons';


export const IconClover = () => (
    <Stack
        style={styles.iconContainer}
    >
        <Icon
            as={MaterialCommunityIcons}
            name="clover"
            size={19}
            color="violet.500"
        />
    </Stack>
);
export const IconHeart = () => (
    <Stack
        style={styles.iconContainer}
    >
        <Icon
            as={MaterialCommunityIcons}
            name="heart-broken"
            size={19}
            color="violet.500"
        />
    </Stack>
);
export const IconChange = () => (
    <Stack
        style={styles.iconContainer}
    >
        <Icon
            as={MaterialIcons}
            name="published-with-changes"
            size={19}
            color="violet.500"
        />
    </Stack>
);
export const IconFamily = () => (
    <Stack
        style={styles.iconContainer}
    >
        <Icon
            as={MaterialIcons}
            name="family-restroom"
            size={19}
            color="violet.500"
        />
    </Stack>
);
export const IconHome = () => (
    <Stack
        style={styles.iconContainer}
    >
        <Icon
            as={Ionicons}
            name="home"
            size={19}
            color="violet.500"
        />
    </Stack>
);
export const IconMan = () => (
    <Stack
        style={styles.iconContainer}
    >
        <Icon
            as={Entypo}
            name="drink"
            size={19}
            color="violet.500"
        />
    </Stack>
);
export const IconResidence = () => (
    <Stack
        style={styles.iconContainer}
    >
        <Icon
            as={MaterialCommunityIcons}
            name="castle"
            size={19}
            color="violet.500"
        />
    </Stack>
);
export const IconNature = () => (
    <Stack
        style={styles.iconContainer}
    >
        <Icon
            as={FontAwesome}
            name="envira"
            size={19}
            color="violet.500"
        />
    </Stack>
);
export const IconPatriot = () => (
    <Stack
        style={styles.iconContainer}
    >
        <Icon
            as={MaterialCommunityIcons}
            name="sword-cross"
            size={19}
            color="violet.500"
        />
    </Stack>
);

const styles = StyleSheet.create({
    iconContainer: {
        marginLeft: 1,
        marginTop: 0,
    }
})
