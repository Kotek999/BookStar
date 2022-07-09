import React from "react";
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
} from "native-base";
import { data, booksData } from "../../BooksChoice/data";
import { View } from "native-base";
import { Dimensions } from "react-native";

const BooksList = () => {
  const DimensionsHeight = Dimensions.get("window").height;
  const DimensionsWidth = Dimensions.get("window").width;

  return (
    <Box width={DimensionsWidth} height={DimensionsHeight / 1.4}>
      <Heading size="sm" mb="2" color="white" margin={0} padding={5}>
        {data.title}
      </Heading>
      <FlatList
        data={booksData}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="5"
            pr="5"
            py="7"
          >
            <HStack space={4} justifyContent="space-between">
              <Avatar
                size="60px"
                alt="avatar"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="white"
                  bold
                >
                  {item.title}
                </Text>
                <Text
                  fontStyle="italic"
                  color="coolGray.400"
                  _dark={{
                    color: "warmGray.600",
                  }}
                >
                  {item.importantTheme}
                </Text>
              </VStack>
              <Spacer />
              <View margin={3}>
                <Text>{item.linkTo}</Text>
              </View>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default BooksList;
