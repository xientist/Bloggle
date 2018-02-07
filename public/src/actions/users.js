import database from '../firebase/firebase';

export const setUsers = (users) => ({
    type: 'SET_USERS',
    users
});



export const addUser = (user) => ({
    type: 'ADD_USER',
    user
})

export const startAddUser = (userData ={}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            username='',
            userImage=''
        } = userData;

        const user = { username , userImage };

        return database.ref(`users/usernames/${uid}`).set(user).then(() => {
            dispatch(addUser({id: uid, ...user}))
        })
    }
}

export const startSetUsers = () => {
    return (dispatch) => {

        return database.ref(`users/usernames`).once('value').then((snapshot) => {
            const usernames = [];
            snapshot.forEach((cSnapshot) => {
                usernames.push({
                    id: cSnapshot.key,
                    ...cSnapshot.val()
                });
            });

            dispatch(setUsers(usernames));
        })
    };
};
