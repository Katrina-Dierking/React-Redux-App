import axios from 'axios';

export const DAD_JOKE_LOADING = 'DAD_JOKE_LOADING';
export const DAD_JOKE_LOAD_SUCCESS = 'DAD_JOKE_LOAD_SUCCESS';
export const DAD_JOKE_LOAD_FAILURE = 'DAD_JOKE_LOAD_FAILURE';

export const getDadJokes = () => dispatch => {
    dispatch ({ type: DAD_JOKE_LOADING});

    axios
    .get("https://icanhazdadjoke.com/api/random")
    .then (res =>
        dispatch({
            type: DAD_JOKE_LOAD_SUCCESS,
            payload: res.data.value
        })
    )
    .catch (err => {
        console.log(err);
        dispatch({
            type: DAD_JOKE_LOAD_FAILURE,
            payload: "error loading joke"
        });
    });
};