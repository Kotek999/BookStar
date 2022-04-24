import React from "react";
import { Dimensions, ImageBackground } from "react-native";
import { View, Text, ScrollView, Button } from "native-base";
// import Icon from 'react-native-vector-icons/Ionicons';
import FormInputs from "../common/formInputs/formInputs";

const Home = () => {
    return (
        <ScrollView
            flex={1}
            backgroundColor="#ffffff"
            showsVerticalScrollIndicator={false}
        >
            <ImageBackground
                source={require('../images/beerBackground.jpg')}
                style={{
                    height: Dimensions.get('window').height / 2.5,
                }}>
                {/* <View
                    flex={1}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Icon
                        name="beer"
                        color="red"
                        size={60}
                    >
                    </Icon>
                    <Text
                        color="red.600"
                        fontSize={60}
                        fontWeight="bold"
                    >
                        DrunkAm
                    </Text>

                </View> */}
            </ImageBackground>
            <View
                flex={1.5}
                backgroundColor="#ffffff"
                bottom={50}
                borderTopStartRadius={50}
                borderTopEndRadius={50}
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Text
                    fontSize={20}
                    padding={10}
                >
                    Welcome on Login Page
                </Text>
            </View>
            <FormInputs />
        </ScrollView>
    );
};

export default Home;