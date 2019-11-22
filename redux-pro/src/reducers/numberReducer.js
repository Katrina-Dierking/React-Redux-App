import {
    NUMBER_FACTS_LOADING,
    NUMBER_FACTS_LOAD_SUCCESS,
    NUMBER_FACTS_LOAD_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    error: '',
    number:{
        text: '',
        date: ''
    }
};

const numberReducer = (state = initialState, action) => {
    switch (action.type) {

        case NUMBER_FACTS_LOADING: 
            return {
            ...state, 
            isLoading: false
        };

        case NUMBER_FACTS_LOAD_SUCCESS:
            return {
                ...state,
                number: { ...state.number, text: action.payload },
                isLoading: false
            };

        case NUMBER_FACTS_LOAD_FAILURE: 
            return {
            ...state, 
            error: action.payload,
            isLoading:false
        };

        default: 
        return state;
    }
};

export default numberReducer;