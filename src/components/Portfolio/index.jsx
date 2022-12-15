import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {useEffect, useState} from 'react';
import {dbRef} from '../../firebase';
import { getDocs} from 'firebase/firestore';


const Portfolio = () => {

    const [portfolio,setPortfolio] = useState([]);

    useEffect(()=>{
        getPortfolio();
    }, []);

    //function to get info we need 

    const getPortfolio=async()=>{
        const querySnapshot = await getDocs(dbRef);
        console.log(querySnapshot);
        setPortfolio(querySnapshot.docs.map( (doc) => {
            doc.data();
        }));

    };

    const renderPortfolio =(portfolio) =>{
        return (
            <div className="portfolio-content">
                {
                    portfolio.map((port, idx)=>{
                        return (
                            <div className="portfolio-item" key={`port-${idx}`} style={{animationDelay:`${idx * .05}s`}}>
                                <image src={port.imageURL} alt={port.itemName} />
                                <h3>{port.itemName}</h3>
                                <p>{port.itemDescription}</p>
                                <button onClick={ () => window.open(port.itemURL) }>View site</button>
                            </div>

                        )
                    })

                }
            </div>

        );
    }
    return ( 
        <div className="backg">
            <h1>  <AnimatedLetters strArray={"Portfolio".split('')} startIdx={1} /> </h1>

            {renderPortfolio(portfolio)}

            <Loader type = "line-scale" color = "#fed002" width = { 500 }/>     
            
        </div>

    )
}

export default Portfolio;