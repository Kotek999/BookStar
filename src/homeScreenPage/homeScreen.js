import * as React from 'react';
import routes from '../routing/routes';
import { Dimensions, ImageBackground, Image } from "react-native";
import { View, Text, ScrollView, Button } from "native-base";
import logoNativeBase from '../images/nativebaseLogoImage.png';
import { LinearGradient } from 'expo-linear-gradient';
import BookIconEntypo from 'react-native-vector-icons/Entypo';
import { data } from './data';
import BackgroundScreen from '../common/BackgroundScreen/BackgroundScreen';


const HomeScreen = (props) => {

    const DimensionsHeight = Dimensions.get('window').height
    const DimensionsWidth = Dimensions.get('window').width

    const onClickGoToLogIn = () => props.navigation.navigate(routes.WelcomeBooksPage)


    return (
        <BackgroundScreen isScrollView={true}>
                <View
                    width={DimensionsWidth}
                    height={DimensionsHeight} 
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    marginTop={0}
                >
                    <View>
                        <Text
                            margin={4}
                            fontSize={34}
                            color="white"
                            fontWeight="bold"
                            textAlign="center"
                        >
                            {data.title} {""}
                            <BookIconEntypo 
                                name="open-book"
                                size={34}
                                color="white"
                            />
                        </Text>
                    </View>
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

                    <Text
                        margin={8}
                        fontSize={20}
                        color="white"
                        fontWeight="bold"
                        textAlign="center"
                    >
                        {data.content}
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
                            fontSize={16}
                            textTransform="uppercase"
                            color="#272ba1"
                        >
                           {data.buttonText}
                        </Text>
                    </Button>
                </View>
        </BackgroundScreen>
    );
};

export default HomeScreen;
