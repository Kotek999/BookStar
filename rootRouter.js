import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { blackColor, whiteColor } from "./src/common/Colors/colors";
import routes from "./src/routing/routes";
import HomeScreen from "./src/homeScreenPage/homeScreen";
import welcomeBooksRoute from "./src/Routes/welcomeBooksRoute";
import booksChoiceRoute from "./src/Routes/booksChoiceRoute";
import panTadeuszRoute from "./src/Routes/panTadeuszRoute";
import dziadyRoute from "./src/Routes/dziadyRoute";
import lalkaRoute from "./src/Routes/lalkaRoute";
import ferdydurkeRoute from "./src/Routes/ferdydurkeRoute";
import weseleRoute from "./src/Routes/weseleRoute";

const RootStack = createNativeStackNavigator();

const stylesForOptions = {
  cardStyle: {
    backgroundColor: whiteColor,
  },
};

function rootRouter() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen
            name={routes.HomeScreen}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: whiteColor,
              },
              headerTintColor: blackColor,
              headerTitleStyle: {
                fontWeight: "bold",
              },
              ...stylesForOptions,
            }}
            component={HomeScreen}
          />
          <RootStack.Screen
            name={routes.WelcomeBooksPage}
            options={{
              headerShown: false,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
            component={welcomeBooksRoute}
          />
          <RootStack.Screen
            name={routes.BooksChoice}
            options={{
              headerShown: false,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
            component={booksChoiceRoute}
          />
          <RootStack.Screen
            name={routes.PanTadeusz}
            options={{
              headerShown: false,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
            component={panTadeuszRoute}
          />
          <RootStack.Screen
            name={routes.Dziady}
            options={{
              headerShown: true,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
            component={dziadyRoute}
          />
          <RootStack.Screen
            name={routes.Lalka}
            options={{
              headerShown: true,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
            component={lalkaRoute}
          />
          <RootStack.Screen
            name={routes.Ferdydurke}
            options={{
              headerShown: true,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
            component={ferdydurkeRoute}
          />
          <RootStack.Screen
            name={routes.Wesele}
            options={{
              headerShown: true,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
            component={weseleRoute}
          />
        </RootStack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default rootRouter;
