
import * as React from 'react';

export default function Time() {

    const [time, setTime] = React.useState(null)

    React.useEffect(() => {
        let time = getCurrentTime();
        setTime(time);
    }, []);

    const getCurrentTime = () => {
        let today = new Date();
        let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
        let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
        return hours + ':' + minutes;
    }

    return (
        <>
            {time}
        </>
    );
};