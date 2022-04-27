import * as React from 'react';
import routes from '../routing/routes';
import { Dimensions, ImageBackground, Image } from "react-native";
import { View, Text, ScrollView, Button } from "native-base";
import logoNativeBase from '../images/nativebaseLogoImage.png';
import BuildingAFormExample from '../test/test';

const HomeScreen = (props) => {

    const DimensionsHeight = Dimensions.get('window').height
    const DimensionsWidth = Dimensions.get('window').width

    const onClickGoToLogIn = () => props.navigation.navigate(routes.LogInPage)


    return (
        <ImageBackground
            style={{
                backgroundColor: "orange",
                width: DimensionsWidth,
                height: DimensionsHeight,
            }}>
            <View
                width={DimensionsWidth}
                height={DimensionsHeight}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
            >
                <View
                    width="300px"
                    height="300px"
                >
                    <Image
                        source={logoNativeBase}
                        flex={1}
                        resizeMode="contain"
                    />
                </View>
                {/* <BuildingAFormExample /> */}
                <Text
                    margin={8}
                    fontSize={20}
                    color="white"
                    fontWeight="bold"
                    textAlign="center"
                >
                    Welcome in App created by library React Native Base.
                </Text>

                <Button
                    onPress={onClickGoToLogIn}
                    width={DimensionsWidth / 2.5}
                    height={DimensionsHeight / 18}
                    borderColor="white"
                    borderWidth={1}
                    borderRadius={20}
                    backgroundColor="white"
                    shadowColor="black"
                    shadowOpacity={0.5}
                    shadowRadius={10}

                >
                    <Text
                        fontSize={20}
                        textTransform="uppercase"
                        color="orange.500"
                    >
                        Join to Us!
                    </Text>
                </Button>
            </View>
        </ImageBackground>
    );
};

export default HomeScreen;
