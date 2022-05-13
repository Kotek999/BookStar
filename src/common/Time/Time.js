
import * as React from 'react';
import { View, Text } from 'native-base';


export default function Time() {

    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    React.useEffect(() => {
        const target = new Date("05/14/2022 23:59:59");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <View
            flexDirection="row"
        >
            <Text
                marginRight={2}
            >{days}</Text>
            <Text
            marginRight={2}>{hours}</Text>
            <Text marginRight={2}>{minutes}</Text>
            <Text marginRight={2}>{seconds}</Text>
        </View>
    )
};