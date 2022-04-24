import * as React from "react";
import { View, Stack, Input, Button, Text } from "native-base";
// import errorMessages from "../errorMessages/errorMessages";

const FormInputs = (navigation) => {
    const [name, setName] = React.useState("");
    const [nameError, setNameError] = React.useState("");

    const [age, setAge] = React.useState("");
    const [ageError, setAgeError] = React.useState("");

    const [password, setPassword] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");

    // const numbers = /^[-+]?[0-9]+$/;

    const signIn = () => {
        if (name != "") {
            setNameError("");
        } else {
            setNameError("Field name cannot be empty!");
        }
        if (age != "") {
            setAgeError("");
        } else {
            setAgeError("Field age cannot be empty!");
        }
        if (password != "") {
            setPasswordError("");
            console.log(name, age, password);
            alert(name + age + password);
        } else {
            setPasswordError("Field password cannot be empty!");
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
                    onChangeText={(text) => setName(text)}
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
                    onChangeText={(text) => setAge(text)}
                    onChange={() => setAgeError("")}
                />
                <Text
                    padding={1}
                    color="red.600"
                >
                    {ageError}
                    {/* To pole nie może być puste! */}
                </Text>
                <Input
                    type="password"
                    fontSize="md"
                    variant="underlined"
                    placeholder="Your Password"
                    onChangeText={(text) => setPassword(text)}
                    onChange={() => setPasswordError("")}
                />
                <Text
                    padding={1}
                    color="red.600"
                >
                    {passwordError}
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