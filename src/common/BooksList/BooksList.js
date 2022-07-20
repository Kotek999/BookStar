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
import { DimensionsWidth, DimensionsHeight } from "../Dimensions/Dimensions";
import {
  whiteColor,
  grayBoxColor,
  grayBorderColor,
  grayTextDarkColor,
  grayListTextColor,
  grayListDarkTextColor,
} from "../Colors/colors";

const BooksList = () => {
  return (
    <Box width={DimensionsWidth} height={DimensionsHeight / 1.2}>
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
              <View padding={4}>
                <Text>{item.linkTo}</Text>
              </View>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
      <View marginBottom={10} justifyContent="center" alignItems="center">
        <Heading size="sm" mb="0" color="#cccccc" marginTop={4} padding={3}>
          &copy; {data.authors} &copy;
        </Heading>
      </View>
    </Box>
  );
};

export default BooksList;
