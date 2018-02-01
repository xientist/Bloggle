const defaultUserState = [];

export default (state = defaultUserState, action) => {
    switch (action.type) {
        case  'ADD_USER' :
            return [
               action.user
            ];
        case 'SET_USERS' :
            return action.users;

        default: 
            return state;
    }
};