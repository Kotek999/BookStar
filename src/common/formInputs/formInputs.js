import * as React from "react";
import { View, Stack, Text, FormControl, Input, Button  } from "native-base";
import { useNavigation } from "@react-navigation/native";
// import errorMessages from "../errorMessages/errorMessages";


const FormInputs = () => {

    const { navigate } = useNavigation();

    // const numbers = /^[-+]?[0-9]+$/;

    return (
        <View>
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
                />
                    <Text
                        padding={1}
                        color="red.600"
                    > 
                    </Text>
                <Input
                    type="number"
                    fontSize="md"
                    variant="underlined"
                    placeholder="Your Age"
                    name="age"
                    // error={errors.yourAge}
                />
                    <Text
                        padding={1}
                        color="red.600"
                    >
                    </Text>
                <Input
                    type="password"
                    fontSize="md"
                    variant="underlined"
                    placeholder="Your Password"
                    name="password"
                    // error={errors.yourPassword}
                />
                    <Text
                        padding={1}
                        color="red.600"
                    >
                    </Text>
            </Stack>
            <View
                alignContent="center"
                alignItems="center"
            >
                <Button
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
        </View>
    );
};

export default FormInputs;