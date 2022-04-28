import * as React from 'react';
import routes from '../routing/routes';
import { Dimensions, ImageBackground, Image } from "react-native";
import {
    Box,
    Heading,
    Center,
    NativBaseProvider,
    View,
    Text,
    ScrollView,
    Button
} from "native-base";
import logoNativeBase from '../images/nativebaseLogoImage.png';
import { LinearGradient } from 'expo-linear-gradient';

const Books = (props) => {

    const DimensionsHeight = Dimensions.get('window').height
    const DimensionsWidth = Dimensions.get('window').width

    // const onClickGoToLogIn = () => props.navigation.navigate(routes.LogInPage)


    return (
        <ImageBackground
            style={{
                width: DimensionsWidth,
                height: DimensionsHeight,
            }}>
            <LinearGradient
                colors={['#373837', '#272ba1', '#272ba1']}
            >
                <View
                    width={DimensionsWidth}
                    height={DimensionsHeight}
                    flexDirection="column"
                    alignItems="center"
                    alignContent="center"
                    marginTop={20}
                >
                    {/* <View
                        width="300px"
                        height="300px"
                    >
                        <Image
                            source={logoNativeBase}
                            flex={1}
                            resizeMode="contain"
                        />
                    </View> */}

                    <Box>
                        <Heading 
                            size="xl" 
                            mb="4"
                            color="white"
                        >
                            Witamy
                        </Heading>
                        <Text 
                        margin={0}
                        color="white"
                        fontWeight="bold"
                        fontSize="xl">
                            Dobrze wiemy jak trudne są przygotowania do matury z polskiego.
                            Chcemy Tobie w tym pomóc, dlatego Nasza aplikacja to baza wiedzy 
                            lektur z gwiazdką. 
                        </Text>
                    </Box>

                    <Text
                        margin={8}
                        fontSize={16}
                        color="white"
                        fontWeight="bold"
                        textAlign="center"
                    >
                        Books
                    </Text>

                    <Button
                        // onPress={onClickGoToLogIn}
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
                            color="#272ba1"
                        >
                            Join to Us!
                        </Text>
                    </Button>
                </View>
            </LinearGradient>
        </ImageBackground>
    );
};

export default Books;
