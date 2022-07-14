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
import {
  whiteColor,
  grayBoxColor,
  grayBorderColor,
  grayTextDarkColor,
  grayListTextColor,
  grayListDarkTextColor,
} from "../Colors/colors";

const BooksList = () => {
  const DimensionsHeight = Dimensions.get("window").height;
  const DimensionsWidth = Dimensions.get("window").width;

  return (
    <Box width={DimensionsWidth} height={DimensionsHeight / 1.4}>
      <Heading size="sm" mb="2" color={whiteColor} margin={0} padding={5}>
        {data.title}
      </Heading>
      <FlatList
        data={booksData}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: grayBoxColor,
            }}
            borderColor={grayBorderColor}
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
                    color: grayTextDarkColor,
                  }}
                  color={whiteColor}
                  bold
                >
                  {item.title}
                </Text>
                <Text
                  fontStyle="italic"
                  color={grayListTextColor}
                  _dark={{
                    color: grayListDarkTextColor,
                  }}
                >
                  {item.importantTheme}
                </Text>
              </VStack>
              <Spacer />
              <View margin={4}>
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
