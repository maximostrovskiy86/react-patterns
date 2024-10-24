import React, {useEffect, useRef, useState} from 'react';
import {ClockContainer} from "./ClockWithUseRefHook.styled";


const ClockWithUseRefHook = () => {
    const [time, setTime] = useState(() => new Date());
    const intervalId = useRef(null);

    useEffect(() => {
        intervalId.current = setInterval(() => {
            console.log("Интервал каждые 1 секунды" + Date.now());
            setTime(new Date());
        }, 1000)

        return () => {
            console.log("Функция очистки при размонтировании интервала перед следующим вызовам useEffect")
            stop();
        }
    }, [])

    const stop = () => {
        clearInterval(intervalId.current);
    }

    return (
        <ClockContainer>
            <p>Current time: {time.toLocaleTimeString()}</p>
            <button type={"button"} onClick={stop}>Stop clock</button>
        </ClockContainer>
    )
}

export default ClockWithUseRefHook;