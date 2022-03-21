import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import {types} from '../actionTypes';

const appReducer = combineReducers({
    homeReducer: homeReducer,
});

const rootReducer = (state, action) => {
    if (action.type === types.CLEAR_STORE) {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

export default rootReducer;
