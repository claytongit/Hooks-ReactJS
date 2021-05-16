import { useReducer } from 'react';
import './App.css';

//Estado
const globalState = {
    title: 'O título do contexto',
    body: 'O body do contexto',
    counter: 0,
};

//Função do useReducer
const reducer = (state, action) => {
    
    switch(action.type){
        case 'muda':
        return ({ ...state, title: action.payload });

        case 'não muda':
        return({ ...state, title: action.payload });

        case 'soma':
            return({ ...state, counter: action.payload });

        default:
            console.log('nenhum');
    }

    return { ...state };
}

export default function UseReducer() {
    //state = estado, dispatch = dispara uma ação
    const [state, dispatch] = useReducer(reducer, globalState);
    const { counter, title, body } = state;

    return (
        <div>

            {/* State */}
            <h1>{ title } { counter }</h1>

            {/* Actiom */}
            <button onClick={ () => dispatch({type: 'muda', payload: new Date().toLocaleString('pt-BR')}) } >Muda</button>

            {/* Actiom */}
            <button onClick={ () => dispatch({type: 'não muda', payload: body}) } >Body title</button>

            {/* Actiom */}
            <button onClick={ () => dispatch({type: 'soma', payload: counter + 1}) } >Somar</button>

        </div>
    );    
}