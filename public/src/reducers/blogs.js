const blogglesReducerDefaultState = [];


export default (state = blogglesReducerDefaultState, action) => {
    switch (action.type) {
        case  'ADD_BLOG' :
            return [
                ... state, action.blog
            ];
        case 'REMOVE_BLOG' :
            return state.filter(( { id } ) => 
                 id !== action.idToRemove
            );
        case 'EDIT_BLOG' :
            return state.map((bloggle) => {
                if (bloggle.id === action.id) {
                    return {
                        ...bloggle,
                        ...action.updates
                    };
                } else {
                    return bloggle;
                    }
                });
        case 'SET_BLOGS' :
            return action.blogs;
        case 'UPDATE_USER' :
            return state.map((bloggle) => {
                if (bloggle.uid === action.id) {
                    return {
                        ...bloggle,
                        ...action.userInfo
                    };
                } else {
                    return bloggle;
                }
            })
        case 'ADD_LIKE' :
            return state.map((bloggle) => {
                if (bloggle.id === action.id) {
                    return {
                        ...bloggle,
                        ...action.addCount
                    };
                } else {
                    return bloggle;
                }
            })
        default: 
            return state;
    }
};
