import './index.scss';
import caro3 from '../../assets/images/caro3.webp';
import caro1 from '../../assets/images/caro1.jpeg';
import caro2 from '../../assets/images/caro2.jpeg';
import {useEffect, useState} from 'react';


function Carousel() {

    // set index and start from 0
    const[index, setIndex]=useState(0);

    //creat an array called cards to contain all pictures
    //every picture has unique id
    const cards=[
        {id:"1", image: caro1},
        {id:"2", image: caro2},
        {id:"3", image: caro3},
    ];

    // create a customize module function
    const mod=(n,m) => {

        let result= n % m;

        //return a positive value, otherwise, return result plus value m
        return result >=0 ? result : result + m;
    };

    // increment this state every 3 seconds, 
    // and index will change every 3 seconds, 
    // and use this module operator wrap it around the array
    useEffect(()=>{
        setTimeout(()=>{
            setIndex((index+1)%cards.length);
        },3000)

    },[index]);

    return(
        <div className="caroImage">
            
            {/* map through the pictures on by one */}
            {cards.map((item,i)=>{

                // get left index and right index
                const indexLeft = mod(index - 1, cards.length); //2
                const indexRight= mod(index + 1, cards.length); //1

                let className="";

                if (i===index){
                    className="caro caro-active";
                } else if (i===indexRight) {
                    className="caro caro-right";
                } else if (i===indexLeft){
                    className="caro caro-left";
                } else {
                    className="caro";
                }

                return <img key={item.id} src={item.image} alt="carousel" className={className} />


            })}
 
        </div>
    );
}

export default Carousel;