
import * as React from 'react';
import { View } from 'native-base';
import LogoText from '../LogoText/LogoText';
import { data } from '../../homeScreenPage/data';


export default function CenterContainer() {
    return (
        <View alignItems="center" height={7}>
            <LogoText value={data.title} />
        </View>
    );
};
