import axios from 'axios';

export const NUMBER_FACTS_LOADING = 'NUMBER_FACTS_LOADING';
export const NUMBER_FACTS_LOAD_SUCCESS = 'NUMBER_FACTS_LOAD_SUCCESS';
export const NUMBER_FACTS_LOAD_FAILURE = 'NUMBER_FACTS_LOAD_FAILURE';

export const getNumberFacts = () => dispatch => {
    dispatch ({ type: NUMBER_FACTS_LOADING});
    console.log('world')
    axios
    .get("http://numbersapi.com/42")
    .then (res => {
        console.log('res', res)
        dispatch({
            type: NUMBER_FACTS_LOAD_SUCCESS,
            payload: res.data
        })}
    )
    .catch (err => {
        console.log(err);
        dispatch({
            type: NUMBER_FACTS_LOAD_FAILURE,
            payload: "...oooh no!!! We're having trouble loading the facts. Stand by ... "
        });
    });
};