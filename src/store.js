import {configureStore} from '@reduxjs/toolkit';
import postUserReducer from './postUserReducer';
import { stateReducer } from './reducers';
import userReducer from './userReducer';


const store = configureStore({
    reducer:{
        stateValue:stateReducer,
        userValue:userReducer,
        postUser:postUserReducer,
    },
});


export default store


