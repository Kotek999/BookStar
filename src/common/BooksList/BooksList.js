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
  Pressable,
  Button,
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
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";

const BooksList = () => {
  const navigation = useNavigation();

  return (
    <Box width={DimensionsWidth} height={DimensionsHeight / 1.2}>
      <Heading size="sm" mb="2" color={whiteColor} margin={0} padding={5}>
        {data.title}
      </Heading>
      {booksData.map((item, book) => {
        return (
          <React.Fragment key={book}>
            <List.Section>
              <List.Item
                title={item.title}
                onPress={() => navigation.navigate(item.cardScreen)}
                right={() => (
                  <Avatar
                    size="60px"
                    alt="avatar"
                    source={{
                      uri: item.avatarUrl,
                    }}
                  />
                )}
                // right={PanTadeuszBook}
              ></List.Item>
              {/* <List.Item
                title="Siema"
                onPress={() => navigation.navigate(routes.Dziady)}
                right={DziadyBook}
              ></List.Item>
              <List.Item
                title="Siema"
                onPress={() => navigation.navigate(routes.Lalka)}
                right={LalkaBook}
              ></List.Item>
              <List.Item
                title="Siema"
                onPress={() => navigation.navigate(routes.Ferdydurke)}
                right={FerdydurkeBook}
              ></List.Item>
              <List.Item
                title="Siema"
                onPress={() => navigation.navigate(routes.Wesele)}
                right={WeseleBook}
              ></List.Item> */}
            </List.Section>
          </React.Fragment>
        );
      })}
      {/* <FlatList
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
             <Button justifyContent="flex-start" width={DimensionsWidth - 40} variant="unstyled" onPress={() => console.log("click")}>
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
              <View padding={4} justifyContent="flex-end">
                <Text>{item.linkTo}</Text>
              </View>
            </HStack>
            </Button>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      /> */}
      <View marginBottom={10} justifyContent="center" alignItems="center">
        <Heading size="sm" mb="0" color="#cccccc" marginTop={4} padding={3}>
          &copy; {data.authors} &copy;
        </Heading>
      </View>
    </Box>
  );
};

export default BooksList;
