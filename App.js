import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text } from "native-base";
import Home from './src/home/home';
import UserProfile from "./src/userProfile/userProfile";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Home />
      <Button
        title="Go to Your profile"
        onPress={() =>
          navigation.navigate('UserProfile', { name: 'Roman' })
        }
      />
    </>
  );
}

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name} profile</Text>
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {/* <Center flex={1} px="6" backgroundColor={"rgb(201, 125, 71).500"}> */}
        <Stack.Navigator
          initialRouteName="Home"
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "My Home",
              headerShown: false,
            }}
          />
          <Stack.Screen name="UserProfile" component={ProfileScreen} />
        </Stack.Navigator>
        {/* </Center> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
