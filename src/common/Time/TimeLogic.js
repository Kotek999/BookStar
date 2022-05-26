
import * as React from 'react';
import Time from './Time';


export default function TimeLogic() {

    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    React.useEffect(() => {
        const target = new Date("05/04/2023 23:59:59");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(days);

            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(hours);

            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(minutes);

            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(seconds);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <Time
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
        />
    )
};
