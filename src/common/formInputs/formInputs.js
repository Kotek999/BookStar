import * as React from "react";
import { View, Stack, Input, Button, Text, FormControl } from "native-base";
// import errorMessages from "../errorMessages/errorMessages";


const FormInputs = () => {

    const [values, setValues] = React.useState({
        name: "",
        age: "",
        password: "",
    });

    const [submitted, setSubmitted] = React.useState(false);
    const [valid, setValid] = React.useState(false);

    const handleNameInputChange = (e) => {
        setValues({ ...values, name: e.target.value })
    }
    const handleAgeInputChange = (e) => {
        setValues({ ...values, age: e.target.value })
    }
    const handlePasswordInputChange = (e) => {
        setValues({ ...values, password: e.target.value })
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        if (values.name && values.age && values.password) {
            setValid(true);
        }
        setSubmitted(true);
    }

    // const numbers = /^[-+]?[0-9]+$/;

    return (
        <View>
            {submitted && valid ? <Text>coś</Text> : null}
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
                    name="name"
                    disabled={submitted}
                    marginBottom={2}
                    value={values.name}
                    onChange={handleNameInputChange}
                
                />
                {submitted && !values.name ?
                    <Text
                        padding={1}
                        color="red.600"
                    >
                        Field name cannot be empty!

                    </Text>
                    : null}
                <Input
                    type="number"
                    fontSize="md"
                    variant="underlined"
                    placeholder="Your Age"
                    name="age"
                    marginBottom={2}
                    value={values.age}
                    onChange={handleAgeInputChange}
                />
                {submitted && !values.age ?
                    <Text
                        padding={1}
                        color="red.600"
                    >
                        Field age cannot be empty!
                    </Text>
                    : null}
                <Input
                    type="password"
                    fontSize="md"
                    variant="underlined"
                    placeholder="Your Password"
                    name="password"
                    marginBottom={2}
                    value={values.password}
                    onChange={handlePasswordInputChange}
                />
                {submitted && !values.password ?
                    <Text
                        padding={1}
                        color="red.600"
                    >
                        Field password cannot be empty!
                    </Text>
                    : null}
            </Stack>
            <View
                alignContent="center"
                alignItems="center"
            >
                <Button
                    onPress={handleSignIn}
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