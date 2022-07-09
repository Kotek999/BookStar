import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./src/routing/routes";
import LogInPageRoute from "./src/Routes/logInPageRoute";
import HomeScreen from "./src/homeScreenPage/homeScreen";
import welcomeBooksRoute from "./src/Routes/welcomeBooksRoute";
import booksChoiceRoute from "./src/Routes/booksChoiceRoute";
import panTadeuszRoute from "./src/Routes/panTadeuszRoute";
import dziadyRoute from "./src/Routes/dziadyRoute";
import lalkaRoute from "./src/Routes/lalkaRoute";
import ferdydurkeRoute from "./src/Routes/ferdydurkeRoute";
import weseleRoute from "./src/Routes/weseleRoute";

const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

const stylesForOptions = {
  cardStyle: {
    backgroundColor: "white",
  },
};
function MainStackScreen() {
  return (
    <Stack.Navigator
      stylesForOptions={
        {
          //  header
        }
      }
      initialRouteName={routes.HomeScreen}
    >
      {/* <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "My Home",
              headerShown: false,
            }}
          />
          <Stack.Screen name="UserProfile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  );
}

function rootRouter(props) {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {/* <Center flex={1} px="6" backgroundColor={"rgb(201, 125, 71).500"}> */}
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen
            name={routes.HomeScreen}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: "#fff",
              },
              headerTintColor: "#000",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              ...stylesForOptions,
            }}
            component={HomeScreen}
          />
          {/* <RootStack.Screen 
                name={routes.LogInPage}
                component={LogInPageRoute}
            /> */}
          <RootStack.Screen
            name={routes.WelcomeBooksPage}
            options={{
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
            component={welcomeBooksRoute}
          />
          <RootStack.Screen
            name={routes.BooksChoice}
            options={{
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
            component={booksChoiceRoute}
          />
          <RootStack.Screen
            name={routes.PanTadeusz}
            options={{
              headerShown: true,
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

        {/* </Center> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default rootRouter;
