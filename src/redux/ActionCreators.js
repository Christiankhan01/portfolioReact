import * as ActionTypes from './ActionTypes';
import { PROJECTS } from '../shared/projects';
import { baseUrl } from '../shared/baseUrl';  

export const fetchProjects = () => (dispatch) => {
    dispatch(projectsLoading(true));

//server setup here
    return fetch(baseUrl + 'projects')
    .then(response => response.json())
    .then(projects => dispatch(addProjects(projects)))
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