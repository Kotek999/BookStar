import * as React from 'react';
import { Stack, HStack, Text } from 'native-base';
import { dataCommon } from '../../Books/DataBooks/dataCommon';
import { WebDivider } from '../BookDivider/WebDivider';
import TimeLogic from './TimeLogic';

export default function TimeWrapper(props) {
    return (
        <>
            {props.isMarginExist ? (
                <Stack marginTop={-40}>
                    <WebDivider />
                    <HStack
                        alignItems="center"
                        space={4}
                        justifyContent="flex-end"
                        flexDirection="column"
                    >
                        <HStack
                            alignItems="center"
                        >
                            <Text
                                color="coolGray.600"
                                _dark={{
                                    color: "warmGray.200"
                                }}
                                fontWeight="600"
                                fontSize={13.5}
                            >
                                {dataCommon.timeLeftToMature} </Text>
                        </HStack>
                        <HStack
                            alignItems="center"
                            margin={2}
                        >
                            <Text
                                color="coolGray.600"
                                _dark={{
                                    color: "warmGray.200"
                                }}
                                fontWeight="600"
                                fontSize={13.5}
                            >
                                <TimeLogic />
                            </Text>
                        </HStack>
                    </HStack>
                </Stack>
            ) : (
                <Stack marginTop={0}>
                    <WebDivider />
                    <HStack
                        alignItems="center"
                        space={4}
                        justifyContent="flex-end"
                        flexDirection="column"
                        marginTop={16}
                    >
                        <HStack
                            alignItems="center"
                        >
                            <Text
                                color="coolGray.600"
                                _dark={{
                                    color: "warmGray.200"
                                }}
                                fontWeight="600"
                                fontSize={13.5}
                            >
                                {dataCommon.timeLeftToMature} </Text>
                        </HStack>
                        <HStack
                            alignItems="center"
                            margin={2}
                        >
                            <Text
                                color="coolGray.600"
                                _dark={{
                                    color: "warmGray.200"
                                }}
                                fontWeight="600"
                                fontSize={13.5}
                            >
                                <TimeLogic />
                            </Text>
                        </HStack>
                    </HStack>
                </Stack>


            )}

        </>
    );
};