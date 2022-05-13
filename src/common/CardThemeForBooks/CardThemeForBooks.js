import * as React from 'react';
import { Dimensions, StyleSheet } from "react-native";
import { Box, View, AspectRatio, Image } from "native-base";
import BackgroundScreen from '../../common/BackgroundScreen/BackgroundScreen';
import BoxContainer from './Box';
import CenterContainer from './Center';
import StackContainer from './Stack';

function CardThemeForBooks() {
    return (
        <BackgroundScreen
            isScrollView={true}
        >
            <View
                style={styles.container}
            >
                <Box
                    alignItems="center"
                >
                    <BoxContainer>
                        <Box>
                            <AspectRatio
                                w="100%"
                                ratio={16 / 9}
                            >
                                <Image
                                    source={{
                                        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                    }}
                                    alt="image"
                                />
                            </AspectRatio>
                            <CenterContainer />
                        </Box>
                        <StackContainer />
                    </BoxContainer>
                </Box>
            </View>
        </BackgroundScreen>
    );
};

export default CardThemeForBooks;

const DimensionsHeight = Dimensions.get('window').height
const DimensionsWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        width: DimensionsWidth,
        height: DimensionsHeight,
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        marginTop: 60,
    },
    contentContainer: {
        width: DimensionsWidth,
        height: DimensionsHeight / 3.3,
        margin: 0,
        padding: 20,
        shadowColor: "white",
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
});
