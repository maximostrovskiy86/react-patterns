import React, {useState, useEffect, useRef} from 'react';

const SkipEffectOnFirstRender = props => {
    const [count, setCount] = useState(0);
    const [query] = useState('');
    const isFirsRender = useRef(true);

    useEffect(() => {  // if needs fetch
        if (query === '') {
            return;
        }

        fetch('http://localhost', {});
    }, [query])


    useEffect(() => {

        if (isFirsRender.current) {
            isFirsRender.current = false;
            return;
        }

        console.log(`Выполняется useEffect - ${Date.now()}`);

    });

    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
            <p>
                <stron>useEffect</stron>
                выполняется при первом рендере компонента
            </p>
        </div>
    )
}

export default SkipEffectOnFirstRender;