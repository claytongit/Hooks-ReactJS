import { createContext, useReducer } from 'react';
import P from 'prop-types';

import { globalState } from './data';
import { reducer } from '../utils/reducer';
import { actions } from '../utils/actions';

export const Context = createContext();

export const AppContext = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, globalState);

    const changeTitle = (payload) => {
        dispatch({ type: actions.CHANGE_TITLE, payload });
    }

    return(
        <Context.Provider value={{ state, changeTitle }}>
            {children}
        </Context.Provider>
    );
}

AppContext.prototype ={
    children: P.node,
};