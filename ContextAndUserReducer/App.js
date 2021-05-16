import './App.css';

import { AppContext } from './AppContext';
import { H1 } from './components/H1';

export default function App() {    
    return (
        <AppContext>           
            <div>
                <H1 />
            </div>
        </AppContext>
    );    
}