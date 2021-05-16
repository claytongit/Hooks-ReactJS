import { actions } from './actions';

export const reducer = (state, action) => {

    switch (action.type) {
        case actions.CHANGE_TITLE:{
         console.log('Mudou titulo');
         return{ ...state, title: action.payload};
        }   
        default:
            break;
    }
 
     return { ...state };
 }