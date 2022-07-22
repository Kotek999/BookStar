import React from "react";
import { Box, Heading, Avatar, View, Divider } from "native-base";
import { data, booksData } from "../../BooksChoice/data";
import { DimensionsWidth, DimensionsHeight } from "../Dimensions/Dimensions";
import { whiteColor, grayColor, grayDescriptionColor } from "../Colors/colors";
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";
import { StyleSheet } from "react-native";
import ArrowIcon from "../BooksNavigationArrow/ArrowIcon";
import isWEB from "../Resolutions/isWEB";

const BooksList = () => {
  const navigation = useNavigation();

  return (
    <Box width={DimensionsWidth} height={DimensionsHeight}>
      <Heading size="sm" mb="2" color={whiteColor} margin={0} padding={5}>
        {data.title}
      </Heading>
      <View style={styles.listContainer}>
        <View width={isWEB() && DimensionsHeight > 700 ? "90%" : "100%"}>
          {booksData.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <List.Section>
                  <List.Item
                    title={item.title}
                    titleStyle={styles.title}
                    description={item.importantTheme}
                    descriptionStyle={styles.description}
                    onPress={() => navigation.navigate(item.cardScreen)}
                    left={() => (
                      <View style={styles.listContainer}>
                        <Avatar
                          size="50px"
                          alt={data.avatar}
                          source={item.avatarUrl}
                        />
                      </View>
                    )}
                    right={() => (
                      <View style={styles.arrowIconContainer}>
                        <ArrowIcon />
                      </View>
                    )}
                  ></List.Item>
                </List.Section>
              </React.Fragment>
            );
          })}
        </View>
      </View>
      <View style={styles.copyrightContainer} marginTop={30}>
        <Heading size="sm" mb="0" color="#cccccc" marginTop={0} padding={3}>
          &copy; {data.authors} &copy;
        </Heading>
      </View>
    </Box>
  );
};

export default BooksList;

const styles = StyleSheet.create({
  listContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: whiteColor,
    fontSize: 18,
    marginLeft: 5,
    fontWeight: "bold",
  },
  description: {
    color: grayDescriptionColor,
    fontSize: 14,
    marginLeft: 5,
    textShadowColor: grayColor,
    textShadowOffset: { width: -1 },
    textShadowRadius: 90,
  },
  arrowIconContainer: {
    justifyContent: "center",
    marginRight: 6,
  },
  copyrightContainer: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
