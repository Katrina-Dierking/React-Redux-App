import React from 'react';
import { connect } from 'react-redux';
import {getDadJokes} from '../actions';

const DadJokes = props => {

    return (
        <>
        <button onClick = {() => {
            props.getDadJokes();
        }}
        >
            Tell me another one!!
        </button>
        {props.error && <div>{props.error}</div>}
        {props.isLoading ? (
            <div>loading joke ... </div>
        ):(
            <>
            <div>{props.goodOne.id}</div>
            <div>{props.goodOne.joke}</div>
            </>
        )}
        </>
    );
};

const mapStateToProps = state => {
    return{
        isLoading: state.isLoading,
        error:state.error,
        goodOne:state.goodOne
    };
};

export default connect (
    mapStateToProps,
    {getDadJokes}
)(DadJokes);