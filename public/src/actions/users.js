import database from '../firebase/firebase';

export const setUser = (usernames) => {
    type: 'SET_USER',
    usernames
};

export const startSetUser = () => {
    return (dispatch) => {
        return database.ref('users/usernames').once('value').then((snapshot) => {
            const usernames = [];
            snapshot.forEach((cSnapShot) => {
                usernames.push({
                    id: cSnapShot.key,
                    ...cSnapShot.val()
                });
            });

            dispatch(setUser(usernames));
        });
    };
};