import * as React from 'react';
import { Dimensions, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


const BackgroundScreen = () => {

    const DimensionsHeight = Dimensions.get('window').height
    const DimensionsWidth = Dimensions.get('window').width

    return (
        <>
        <ImageBackground
            style={{
                width: DimensionsWidth,
                height: DimensionsHeight,
            }}>
            <LinearGradient
                colors={['#373837', '#272ba1', '#272ba1']}
            ></LinearGradient>
        </ImageBackground>
        </>

    );
};

export default BackgroundScreen;