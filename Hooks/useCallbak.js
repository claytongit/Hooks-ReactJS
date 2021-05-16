import React, { useCallback, useState } from 'react';
import P from 'prop-types';
import './App.css';

const Button = React.memo(({ incrementButton }) => {
    console.log('filho, redenrizou');
    return <button onClick={ () => incrementButton(10) }>+</button>;
});

//Cria uma props
Button.prototypes = {
    incrementButton: P.func
};

export default function useCallback() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = useCallback((number) => {
        setCounter((prevCounter) => prevCounter + number);
    }, []);

    console.log('pai, redenrizou');

    return (
        <div className="App">
            <h1>C1: {counter}</h1>
            <Button incrementButton={ incrementCounter } />
        </div>
    );
}