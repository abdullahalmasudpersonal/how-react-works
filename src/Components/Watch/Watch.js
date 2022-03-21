import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setStepts]=useState(0);
    const increaseStepts =()=>{
        const newSetepsCount = steps + 1;
        setStepts(newSetepsCount);
    }

useEffect( ()=>{
    console.log(steps)
},[steps])

    return (
        <div>
            <h3>This is my smart Watch</h3>
            <h3>My courrent steps: {steps}</h3>
            <button onClick={increaseStepts}>The runs</button>
            <Display name='Masud' steps={steps}></Display>
        </div>
    );
};

export default Watch;