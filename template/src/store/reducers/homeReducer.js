import {types} from '../actionTypes';

const INITIAL_STATE = {
    loader: false,
};

const homeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.TOGGLE_LOADING: {
            return {...state, loader: action.payload};
        }
        default:
            return state;
    }
};

export default homeReducer;
