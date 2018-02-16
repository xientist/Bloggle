import uuid from 'uuid';
import database from '../firebase/firebase';

export const addBlog = (blog) => ({
    type: 'ADD_BLOG',
    blog
});

export const startAddBlog = (blogData = {}) => {
    return (dispatch , getState ) => {
        const uid = getState().auth.uid;
        const {
          title='',
          blog = '', 
          createdAt = 0,
          likes = 0,
          username='',
          userImage='',
          userLikes = ['123abc']
        } = blogData;


        const blogs = { title, blog , createdAt , uid , likes , username , userImage , userLikes };



        return database.ref(`users/bloggles`).push(blogs).then((ref) => {
            dispatch(addBlog({
                id: ref.key,
                ...blogs
            }));
        })
    };
};

export const removeBlog = ( { idToRemove } = {} ) => ({
    type: 'REMOVE_BLOG',
    idToRemove
});

export const editBlog = (id, updates) => ({
    type: 'EDIT_BLOG',
    id,
    updates
});

export const startEditBlog = (id , updates) => {
    return (dispatch) => {
        return database.ref(`users/bloggles/${id}`).update(updates).then(() => {
            dispatch(editBlog( id , updates ));
        });
    };
};


export const setBlogs = (blogs) => ({
    type: 'SET_BLOGS',
    blogs
});

export const addLike = (id , addCount) => ({
    type: 'ADD_LIKE',
    id,
    addCount
});

export const startAddLike = (id , addCount) => {
    return (dispatch) => {
        return database.ref(`users/bloggles/${id}`).update(addCount).then(() => {
            dispatch(addLike( id , addCount));
        });
    };
};

export const startSetBlogs = () => {
    return (dispatch) => {
        return database.ref(`users/bloggles`).once('value').then((snapshot) => {
            const blogs = [];
            snapshot.forEach((cSnapShot) => {
                blogs.push({
                    id: cSnapShot.key,
                    ...cSnapShot.val()
                });
            });
            
            dispatch(setBlogs(blogs));
        });
    };
};


        // const bloggles = getState().bloggles
        // return database.ref('users/bloggles').update(bloggles);
    

export const startUpdateUserBlogs = (id, userInfo) => ({
    type: 'UPDATE_USER',
    id,
    userInfo
});


export const startRemoveBlog = ( { idToRemove } ) => {
    return  (dispatch) => {
       return database.ref(`users/bloggles/${idToRemove}`).remove().then(() => {
            dispatch(removeBlog({idToRemove}));
       });   
       
    };
};