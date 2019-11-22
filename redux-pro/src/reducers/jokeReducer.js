import {
    DAD_JOKE_LOADING,
    DAD_JOKE_LOAD_SUCCESS,
    DAD_JOKE_LOAD_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    error: '',
    goodOne: {name:'Dad', joke: ''}
};

const jokeReducer = (state = initialState, action) => {
    switch (action.type) {

        case  DAD_JOKE_LOADING: 
            return {
            ...state, 
            isLoading: true
        };

        case DAD_JOKE_LOAD_SUCCESS:
            return {
                ...state,
                goodOne: { ...state.goodOne, joke: action.payload },
                isLoading: false
            };

        case DAD_JOKE_LOAD_FAILURE: 
            return {
            ...state, 
            error: action.payload,
            isLoading:false
        };

        default: 
        return state;
    }
};

export default jokeReducer;