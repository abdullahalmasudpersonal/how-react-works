import React from 'react';
import Dail from '../Dail/Dail';

const Display = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>So far steps today: {props.steps}</p>
            <Dail steps={props.steps}></Dail>
        </div>
    );
};

export default Display;