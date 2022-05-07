import * as React from 'react';
import {
    Text,
} from "native-base";
import { data } from '../../WelcomeBooksPage/data';

export default function WelcomeContentText() {

    const textOptionsStyle = {
        marginTop: 16,
        color: "white",
        fontWeight: "bold",
    }

    return (
        <>
            <Text
                style={textOptionsStyle}
                fontSize="lg"
            >
                {data.contentOne}
            </Text>
            <Text
                style={textOptionsStyle}
                fontSize="lg"
            >
                {data.contentTwo}
            </Text>
            <Text
                style={textOptionsStyle}
                fontSize="lg"
            >
                {data.contentThree}
            </Text>
        </>
    );
};



