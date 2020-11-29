import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form'; 
import { Projects } from './projects'; 
import thunk from 'redux-thunk'; 
import logger from 'redux-logger'; 
import { Auth } from './auth';
import { InitialFeedback } from './forms';
import { favorites } from './favorites';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            projects: Projects,
            auth: Auth,
            favorites, 
            ...createForms({
                feedback: InitialFeedback
            })
        }),
         applyMiddleware(thunk, logger)

    ); 

    
    return store; 
}
