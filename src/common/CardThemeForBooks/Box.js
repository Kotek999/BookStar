import * as React from 'react';
import { Dimensions } from 'react-native';
import { Box } from 'native-base';


export default function BoxContainer(props) {

    const DimensionsWidth = Dimensions.get('window').width

    return (
        <Box {...props}
            maxW={DimensionsWidth}
            margin={3}
            rounded="xl"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }}
        >
        </Box>
    );
};



