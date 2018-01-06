const usersReducerDefaultState = [];

export default (state = usersReducerDefaultState , action) => {
    switch (action.type) {
        case 'SET_USER' :
            return  action.usernames;
        default: 
            return state;
    };
};