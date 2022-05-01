import * as React from 'react';
import { Dimensions, ImageBackground, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


function BackgroundScreen(props) {

    const DimensionsHeight = Dimensions.get('window').height
    const DimensionsWidth = Dimensions.get('window').width

    return (
        <>
            {props.isScrollView ? (
                <ScrollView>
                    <ImageBackground
                        style={{
                            width: DimensionsWidth,
                            height: DimensionsHeight,
                        }}>
                        <LinearGradient {...props}
                            colors={['#373837', '#272ba1', '#272ba1']}
                        ></LinearGradient>
                    </ImageBackground>
                </ScrollView>
            ) : (<ImageBackground
                style={{
                    width: DimensionsWidth,
                    height: DimensionsHeight,
                }}>
                <LinearGradient {...props}
                    colors={['#373837', '#272ba1', '#272ba1']}
                ></LinearGradient>
            </ImageBackground>)}
        </>
    );
};

export default BackgroundScreen;