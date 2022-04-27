import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from "./src/routing/routes";
import LogInPageRoute from "./src/Routes/logInPageRoute";
import HomeScreen from "./src/homeScreenPage/homeScreen";
import booksRoute from "./src/Routes/booksRoute";


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
          stylesForOptions= {
              {
                //  header
              } 
          }
          initialRouteName={routes.Start}
        >
            <Stack.Screen
                name={routes.Start}
                options={{
                    headerShown: false,
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
    )
}

function rootRouter(props) {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {/* <Center flex={1} px="6" backgroundColor={"rgb(201, 125, 71).500"}> */}
        <RootStack.Navigator mode="modal" headerMode="none">
            <RootStack.Screen 
                name="Main"
                children={() => <MainStackScreen />}
            />
            {/* <RootStack.Screen 
                name={routes.LogInPage}
                component={LogInPageRoute}
            /> */}
            <RootStack.Screen 
                name={routes.BooksChoice}
                component={booksRoute}
            />
        </RootStack.Navigator>
        
        {/* </Center> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default rootRouter;
