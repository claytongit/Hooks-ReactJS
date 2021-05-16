import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
    console.log('clicou');
}

function useEffect() {

    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    //ComponentDiUpadate = executa toda vez que o component atualizar    
    useEffect(() => {
        console.log('ComponentDiUpadate');
    });

    //ComponentDiMount = executa uma vez
    useEffect(() => {
        console.log('ComponentDiMount');
    }, []);

    //Com dependencia = executado toda vez que a dependencia mudar
    useEffect(() => {
        console.log('Contatdor mudou para', counter);
    }, [counter]);

    //ComponentDiMount = executa uma vez
    useEffect(() => {
        document.querySelector('h1')?.addEventListener('click', eventFn);
        //ComponentWillUnount = Limpezas
        return () => {
            document.querySelector('h1')?.removeEventListener('click', eventFn);
        }
    }, []);

    return (
        <div className="App">
            <h1>C1: {counter} C:2 {counter2}</h1>
            <button onClick={ () => setCounter((prevCounter) => prevCounter + 1) } >+</button>
            <button onClick={ () => setCounter2((prevCounter2) => prevCounter2 + 1) } >+ (2)</button>
        </div>
    );
}

export default App;
