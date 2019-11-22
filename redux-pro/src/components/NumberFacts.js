import React from 'react';
import { connect } from 'react-redux';
import {getNumberFacts} from '../actions';
import styled from 'styled-components';

const Container = styled.div`
    font-family: The Wild Hammers;
    width: 400px;
    height: 200px;
    align-items: center;
    text-align: center;
    padding: 15px;
    border: .5px solid black;
    border-radius: 10px;
    margin-bottom: 7%;
    background: slategray;
    box-shadow: 5px 5px 5px black;
    `

const NumberFacts = props => {

    return (
        <>
        <button onClick = {() => {
            console.log('hello');
            props.getNumberFacts();
        }}
        >
            The facts!! Just the facts!!
        </button>
        {props.error && <div>{props.error}</div>}
        {props.isLoading ? (
            <div>Loading facinating number facts ... </div>
        ):(
            <>
            <br></br>
            <div>COOL NEW NUMBER FACT:</div>
            <br></br>
            <Container className= "fact-box">
                {props.number.text}
                {props.number.date}
            </Container>
            </>
        )}
        </>
    );
};

const mapStateToProps = state => {
    return{
        isLoading: state.isLoading,
        error:state.error,
        number:state.number
    };
};

export default connect (
    mapStateToProps,
    {getNumberFacts}
)(NumberFacts);