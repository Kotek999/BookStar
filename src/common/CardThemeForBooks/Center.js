
import * as React from 'react';
import { Center } from 'native-base';
import LogoText from '../LogoText/LogoText';
import { data } from '../../homeScreenPage/data';


export default function CenterContainer() {
    return (
        <Center
            bg="violet.500"
            _dark={{
                bg: "violet.400"
            }}
            _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs"
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
            
        >
           <LogoText 
                value={data.title}
            />
        </Center>
    );
};
