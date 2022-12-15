import './index.scss';
import caro3 from '../../assets/images/caro3.webp';
import caro1 from '../../assets/images/caro1.jpeg';
import caro2 from '../../assets/images/caro2.jpeg';
import {useEffect, useState} from 'react';


function Carousel() {

    const[index, setIndex]=useState(0);

    const cards=[
        {id:"1", image: caro1},
        {id:"2", image: caro2},
        {id:"3", image: caro3},
    ];

    const mod=(n,m) => {

        let result= n % m;

        //return a positive value

        return result >=0 ? result : result + m;
    };

    useEffect(()=>{
        setTimeout(()=>{
            setIndex((index+1)%cards.length);
        },3000)

    },[index]);

    return(
        <div className="caroImage">
            
            {cards.map((item,i)=>{
                const indexLeft = mod(index - 1, cards.length);
                const indexRight= mod(index + 1, cards.length);

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