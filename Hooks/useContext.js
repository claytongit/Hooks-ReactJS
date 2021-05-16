// import P from 'prop-types';
import { createContext, useContext, useState } from 'react';
import './App.css';

//Estado global
const globalState = {
    title: 'O título que contexto',
    body: 'O body do contexto',
    counter: 0,
};

//Cria um contexto
const GlobalContext = createContext();

//Component de context que recebe outros components
const Div = () => {
    return(
        <>
            <H1 />
            <P />
        </>
    );
}

//Component de context
const H1 = () => {
    //Usa o contexto que foi criado
    const theContext = useContext(GlobalContext);

    const {contextState: { title }, setContextState } = theContext;

    return( 
        <h1 
            onClick={() => setContextState((s) => ({ ...s, title: s.title = 'Clicou' }) )}
        >
        {title}
        </h1> 
    );
}

//Component de context
const P = () => {
    const theContext = useContext(GlobalContext);
    const {
      contextState: { body, counter },
      setContextState,
    } = theContext;
    return (
      <p
        onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }) )}
      >
        {body} {counter}
      </p>
    );
  };

export default function UseContext() {

    //Recebe o estatdo inicial = globalState
    const [contextState, setContextState] = useState(globalState);

    return (
        // Disponibiliza todos os estados para todos os filhos
        <GlobalContext.Provider value={ { contextState, setContextState } }>
            <Div />
        </GlobalContext.Provider>
    );
    
}