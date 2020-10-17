import { createStore } from 'redux';
import { defaultState } from '../app/server/defaultState';

export const store = createStore(
    function reducer(state = defaultState, action) {
        return state;
    }
);