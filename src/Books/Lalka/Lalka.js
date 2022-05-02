import * as React from 'react';
import routes from '../../routing/routes';
import { Dimensions, ImageBackground, Image } from "react-native";
import {
    Box,
    Heading,
    Center,
    NativBaseProvider,
    View,
    ScrollView,
    Text,
    Button,
} from "native-base";
import RightArrowIconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BackgroundScreen from '../../common/BackgroundScreen/BackgroundScreen';

const Lalka = (props) => {

    const DimensionsHeight = Dimensions.get('window').height
    const DimensionsWidth = Dimensions.get('window').width

    const onClickGoToBooksChoice = () => props.navigation.navigate(routes.BooksChoice)


    return (
        <BackgroundScreen isScrollView={true}>
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
                <Box
                    margin={0}
                    padding={7}
                    borderColor="white"
                    borderWidth={0}
                    width={DimensionsWidth}
                    height={DimensionsHeight / 3.3}
                    shadowColor="white"
                    shadowOpacity={0.1}
                    shadowRadius={10}
                >
                    <Heading
                        size="xl"
                        mb="4"
                        color="white"
                        margin={0}
                        padding={0}
                    >
                        Lalka
                    </Heading>
                    <Text
                        margin={0}
                        padding={0}
                        color="white"
                        fontWeight="bold"
                        fontSize="lg">
                        
                    </Text>
                </Box>
                <Button
                    onPress={onClickGoToBooksChoice}
                    margin={20}
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
                        <RightArrowIconMaterialIcons
                            name="arrow-forward-ios"
                            size={12}
                            color="#272ba1"
                        />
                    </Text>
                </Button>
            </View>
        </BackgroundScreen>
    );
};

export default Lalka;
