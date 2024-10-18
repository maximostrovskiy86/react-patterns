import React, {useState} from 'react';
// import styles from './counter.module.scss';

const Counter = () => {
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);

    const handleCounterAIncrement = () => {
        setCounterA( prevCount => prevCount + 1 );
    }

    const handleCounterBIncrement = () => {
        setCounterB( prevCount => prevCount + 1 );
    }

    return (
        <>
            <button
                // className={styles.btn}
                style={{cursor: 'pointer', marginTop: '25px'}}
                type="button"
                onClick={handleCounterAIncrement}>
                Кликнули каунтерА {counterA} раз
            </button>
            <button
                // className={styles.btn}
                style={{cursor: 'pointer', margin: '10px'}}
                type="button"
                onClick={handleCounterBIncrement}>
                Кликнули каунтерB {counterB} раз
            </button>
        </>
    )
}

export default Counter;