import { useState, useEffect } from "react";

export default  function  useLocalStorage(key, defaultValue) {
    const [state, setState] = useState(() => { // Lazy initial state call (request) just by the first render
        return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    })

    useEffect(() => { // Lazy initial state call (request) just by the first render because it could call every time. Not async code
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState];
}