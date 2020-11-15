import * as ActionTypes from './ActionTypes';
import { PROJECTS } from '../shared/projects';

export const fetchProjects = () => (dispatch) => {
    dispatch(projectsLoading(true));

    setTimeout(() => {
        dispatch(addProjects(PROJECTS));
    }, 2000);
}

export const projectsLoading = () => ({
    type: ActionTypes.PROJECTS_LOADING
});

export const projectsFailed = (errMess) => ({
    type: ActionTypes.PROJECTS_FAILED,
    payload: errMess
}); 

export const addProjects = (projects) => ({
   type: ActionTypes.ADD_PROJECTS, 
   payload: projects 
});