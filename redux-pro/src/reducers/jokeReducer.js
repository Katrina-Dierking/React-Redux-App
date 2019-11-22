import {
    DAD_JOKE_LOADING,
    DAD_JOKE_LOAD_SUCCESS,
    DAD_JOKE_LOAD_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    error: '',
    joke: {id: 'Dad', joke: ''}
};

const reducer = {state = initialState, action} => {
    switch (action.type) {

        default: 
        return state;
    }
}