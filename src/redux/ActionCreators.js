import * as ActionTypes from './ActionTypes';
import { firestore } from '../firebase/firebase';

export const fetchProjects = () => (dispatch) => {
    dispatch(projectsLoading(true));

    return firestore.collection('projects').get()
        .then(snapshot => {
            let projects = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const _id = doc.id
                projects.push({_id, ...data });
            });
            return projects;
        })
        .then(projects => dispatch(addProjects(projects)))
        .catch(error => dispatch(projectsFailed(error.message)));
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
export const postFeedback = (feedback) => (dispatch) => {

    return firestore.collection('feedback').add(feedback)
        .then(response => { console.log('Feedback', response); alert('Thank you for your feedback!'); })
        .catch(error => { console.log('Feedback', error.message); alert('Your feedback could not be posted\nError: ' + error.message); });
};


