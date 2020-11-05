import { createStore, combineReducers } from 'redux';
import { Reducer } from './reducer'; 
import { Projects } from './projects'; 
import thunk from 'redux-thunk'; 
import logger from 'redux-logger'; 

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            projects: Projects, 
        })

    ); 

    
    return store; 
}
