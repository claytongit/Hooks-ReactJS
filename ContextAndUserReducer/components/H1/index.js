import { useContext, useRef } from 'react';
import { Context } from '../../AppContext';

export const H1 = () => {
    const context = useContext(Context);
    const inputRef = useRef();

    return(
        <>
            <h1>{ context.state.title }</h1>
            
            <button onClick={ () => context.changeTitle(inputRef.current.value) } >mudar</button>

            <input type="text" ref={inputRef} />
        </>
    );
}