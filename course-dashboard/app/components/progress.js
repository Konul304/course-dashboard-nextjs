import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = () => {
    const percentage = 60;
    return (
        <>
             <CircularProgressbar value={percentage} text='abc'/>
        </>
    );
}

export default Progress;
