import './App.css';
import { AppContext } from './context/AppContext';

import { Div } from './components/Div';

export default function App() {
    return (
        <AppContext>
            <Div />
        </AppContext>
    );    
}