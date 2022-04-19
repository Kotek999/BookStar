import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/home/home';

function HomeScreen() {
  return (
      <Home/>
  );
}

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
        </Stack.Navigator>
        {/* </Center> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
