import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
<<<<<<< HEAD
import { auth, firestore, fireauth, firebasestore } from '../firebase/fireabse';
=======
import { auth, firestore, fireauth, firebasestore } from '../firebase/firebase';

>>>>>>> 01d56c581dbdc40b3cfc78e09483f68fd497ee79
export const fetchProjects = () => (dispatch) => {
    dispatch(projectsLoading(true));

    //server setup here + error handling here
    return fetch(baseUrl + 'projects')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText)
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
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
<<<<<<< HEAD

export const fetchFavorites = () => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    var user = auth.currentUser;

    dispatch(favoritesLoading(true));

    return firestore.collection('favorites').where('user', '==', user.uid).get()
    .then(snapshot => {
        let favorites = { user: user, projects: []};
        snapshot.forEach(doc => {
            const data = doc.data()
            favorites.projects.push(data.project);
        });
        console.log(favorites);
        return favorites;
    })
    .then(favorites => dispatch(addFavorites(favorites)))
    .catch(error => dispatch(favoritesFailed(error.message)));
=======
export const requestLogin = () => {
    return {
        type: ActionTypes.LOGIN_REQUEST
    }
}
export const postFeedback = (feedback) => (dispatch) => {
        
    return firestore.collection('feedback').add(feedback)
    .then(response => { console.log('Feedback', response); alert('Thank you for your feedback!'); })
    .catch(error =>  { console.log('Feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
};

export const receiveLogin = (user) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        user
    }
}

export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return auth.signInWithEmailAndPassword(creds.username, creds.password)
        .then(() => {
            var user = auth.currentUser;
            localStorage.setItem('user', JSON.stringify(user));
            // Dispatch the success action
            dispatch(fetchFavorites());
            dispatch(receiveLogin(user));
        })
        .catch(error => dispatch(loginError(error.message)))
};

export const googleLogin = () => (dispatch) => {
    const provider = new fireauth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {
            var user = result.user;
            localStorage.setItem('user', JSON.stringify(user));
            // Dispatch the success action
            dispatch(fetchFavorites());
            dispatch(receiveLogin(user));
        })
        .catch((error) => {
            dispatch(loginError(error.message));
        });
}
export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    auth.signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    localStorage.removeItem('user');
    dispatch(favoritesFailed("Error 401: Unauthorized"));
    dispatch(receiveLogout())
>>>>>>> 01d56c581dbdc40b3cfc78e09483f68fd497ee79
}
export const postFavorite = (projectId) => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    return firestore.collection('favorites').add({
        user: auth.currentUser.uid,
        project: projectId
    })
<<<<<<< HEAD
    .then(docRef => {
        firestore.collection('favorites').doc(docRef.id).get()
            .then(doc => {
                if (doc.exists) {
                    dispatch(fetchFavorites())
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            });
    })
    .catch(error => dispatch(favoritesFailed(error.message)));
=======
        .then(docRef => {
            firestore.collection('favorites').doc(docRef.id).get()
                .then(doc => {
                    if (doc.exists) {
                        dispatch(fetchFavorites())
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                });
        })
        .catch(error => dispatch(favoritesFailed(error.message)));
>>>>>>> 01d56c581dbdc40b3cfc78e09483f68fd497ee79
}
export const deleteFavorite = (projectId) => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    var user = auth.currentUser;

    return firestore.collection('favorites').where('user', '==', user.uid).where('project', '==', projectId).get()
<<<<<<< HEAD
    .then(snapshot => {
        console.log(snapshot);
        snapshot.forEach(doc => {
            console.log(doc.id);
            firestore.collection('favorites').doc(doc.id).delete()
            .then(() => {
                dispatch(fetchFavorites());
            })
        });
    })
    .catch(error => dispatch(favoritesFailed(error.message)));
};
=======
        .then(snapshot => {
            console.log(snapshot);
            snapshot.forEach(doc => {
                console.log(doc.id);
                firestore.collection('favorites').doc(doc.id).delete()
                    .then(() => {
                        dispatch(fetchFavorites());
                    })
            });
        })
        .catch(error => dispatch(favoritesFailed(error.message)));
};
export const fetchFavorites = () => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    var user = auth.currentUser;

    dispatch(favoritesLoading(true));

    return firestore.collection('favorites').where('user', '==', user.uid).get()
        .then(snapshot => {
            let favorites = { user: user, projects: [] };
            snapshot.forEach(doc => {
                const data = doc.data()
                favorites.projects.push(data.project);
            });
            console.log(favorites);
            return favorites;
        })
        .then(favorites => dispatch(addFavorites(favorites)))
        .catch(error => dispatch(favoritesFailed(error.message)));
}
>>>>>>> 01d56c581dbdc40b3cfc78e09483f68fd497ee79
export const favoritesLoading = () => ({
    type: ActionTypes.FAVORITES_LOADING
});

export const favoritesFailed = (errmess) => ({
    type: ActionTypes.FAVORITES_FAILED,
    payload: errmess
});

export const addFavorites = (favorites) => ({
    type: ActionTypes.ADD_FAVORITES,
    payload: favorites
});
