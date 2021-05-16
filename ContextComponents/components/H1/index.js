import { useContext } from 'react';
import { GlobalContext } from '../../context/AppContext';

export const H1 = () => {
    const theContext = useContext(GlobalContext);

    const {state: { title }, setState } = theContext;

    return( 
        <h1 
            onClick={() => setState((s) => ({ ...s, title: s.title = 'Clicou' }) )}
        >
        {title}
        </h1> 
    );
}