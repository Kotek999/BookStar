import React, { useState } from "react";
import { View, Stack, Input, Button, Text } from "native-base";
// import errorMessages from "../errorMessages/errorMessages";

const FormInputs = () => {
    const [name, setName] = useState();
    const [nameError, setNameError] = useState();
    const signIn = () => {
       if(name!="") {
           setNameError("");
           alert(name);
       }else {
           setNameError("To pole nie może być puste!");
       }
    }
    return (
        <>
            <Stack
                justifyContent="center"
                marginTop={-10}
                marginLeft={10}
                marginBottom={10}
                space={0} 
                w="75%"
                maxW="full"
            >
                <Input
                    type="text"
                    fontSize="md"
                    variant="underlined"
                    placeholder="Your Name"
                    value={name}
                    onChangeText={(nothing) => setName(nothing)}
                    onChange={() => setNameError("")}
                />
                <Text
                    padding={1}
                    color="red.600"
                >
                {nameError}
                    {/* To pole nie może być puste! */}
                </Text>
                <Input
                    type="number"
                    fontSize="md"
                    variant="underlined"
                    placeholder="Your Age"
                />
                 <Text
                    padding={1}
                    color="red.600"
                >
                    {/* To pole nie może być puste! */}
                </Text>
                <Input
                    type="password"
                    fontSize="md"
                    variant="underlined"
                    placeholder="Your Password"
                />
                 <Text
                    padding={1}
                    color="red.600"
                >
                    {/* To pole nie może być puste! */}
                </Text>
            </Stack>
            <View
                alignContent="center"
                alignItems="center"
            >
                <Button
                    onPress={signIn}
                    flex={1}
                    variant="solid"
                    size="lg"
                    w="75%"
                    maxW="160px"
                    marginBottom={10}
                >
                    Sign In
                </Button>
            </View>
        </>
    );
};

export default FormInputs;