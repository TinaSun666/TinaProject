import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import React, {useState} from 'react';


const About = () => {
    return (
    <div className="back">
        <h1 className="title"> 
            <AnimatedLetters strArray={"About Me".split('')} startIdx={1} />   
        </h1>

        <div>
            
        </div>
    
    </div> 
    );
}

export default About;