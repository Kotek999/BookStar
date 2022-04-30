import React from "react";
import { Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider, Button } from "native-base";
import { data, booksData } from "../../BooksChoice/data";
import RightArrowIconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View } from 'native-base';
import routes from "../../routing/routes";
import { useNavigation } from "@react-navigation/native";

const BooksList = () => {

    const navigation = useNavigation();

    return (
        <Box>
            <Heading
                size="sm"
                mb="2"
                color="white"
                margin={0}
                padding={5}
            >
                {data.title}
            </Heading>
            <FlatList data={booksData} renderItem={({
                item
            }) => <Box borderBottomWidth="1" _dark={{
                borderColor: "gray.600"
            }} borderColor="coolGray.200" pl="5" pr="5" py="7">
                    <HStack space={4} justifyContent="space-between">
                        <Avatar size="50px" source={{
                            uri: item.avatarUrl
                        }} />
                        <VStack>
                            <Text _dark={{
                                color: "warmGray.50"
                            }} color="white" bold>
                                {item.title}
                            </Text>
                            <Text color="coolGray.400" _dark={{
                                color: "warmGray.600"
                            }}>
                                {item.recentText}
                            </Text>
                        </VStack>
                        <Spacer />
                        <View
                            margin={3}
                        >
                            <RightArrowIconMaterialIcons
                                name="arrow-forward-ios"
                                size={24}
                                color="cyan"
                                onPress={() => navigation.navigate(routes.WelcomeBooksPage)}
                            />
                        </View>
                    </HStack>
                </Box>} keyExtractor={item => item.id} />
        </Box>
    );
};

export default BooksList;

