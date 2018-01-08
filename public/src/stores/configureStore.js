import { createStore , combineReducers , applyMiddleware, compose } from 'redux';
import blogsReducer from '../reducers/blogs';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

export default () => {

const store = createStore(
        combineReducers({ 
            bloggles: blogsReducer,
            auth: authReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};



