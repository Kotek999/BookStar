import * as React from 'react';
import { Dimensions, StyleSheet } from "react-native";
import { View, Text } from "native-base";
import BookIconEntypo from 'react-native-vector-icons/Entypo';
import { data } from './data';
import BackgroundScreen from '../common/BackgroundScreen/BackgroundScreen';
import ButtonCustom from '../common/ButtonCustom/ButtonCustom';
import LogoText from '../common/LogoText/LogoText';


const HomeScreen = () => {

    return (
        <BackgroundScreen isScrollView={true}>
            <View
                style={styles.container}
            >
                <LogoText isHomeScreen={true} value={data.title} />
                <Text
                    style={styles.content}
                    fontSize="lg"
                >
                    {data.content}
                </Text>
                <ButtonCustom isForwardIcon={false} value={data.buttonText} />
            </View>
        </BackgroundScreen>
    );
};

export default HomeScreen;

const DimensionsHeight = Dimensions.get('window').height
const DimensionsWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        width: DimensionsWidth,
        height: DimensionsHeight,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginTop: 0
    },
    mainTitle: {
        padding: 40,
        margin: 0,
        fontSize: 34,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    content: {
        padding: 10,
        margin: 10,
        marginBottom: 30,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});