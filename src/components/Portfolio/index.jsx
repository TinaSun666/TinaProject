import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {useEffect, useState} from 'react';
import {dbRef} from '../../firebase';
import {getDocs} from 'firebase/firestore';
import Carousel from './carousel';
import {App} from "./blogApp/App";
import { Router,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';










//previous portfolio coding
// const Portfolio = () => {

//     const [portfolio,setPortfolio] = useState([]);

//     useEffect(()=>{
//         getPortfolio();
//     }, []);

//     //function to get info we need 

//     const getPortfolio=async()=>{
//         const querySnapshot = await getDocs(dbRef);
//         console.log(querySnapshot);
//         setPortfolio(querySnapshot.docs.map( (doc) => {
//             doc.data();
//         }));

//     };

//     const renderPortfolio =(portfolio) =>{
//         return (
//             <div className="portfolio-content">
//                 {
//                     portfolio.map((port, idx)=>{
//                         return (
//                             <div className="portfolio-item" key={`port-${idx}`} style={{animationDelay:`${idx * .05}s`}}>
//                                 <image src={port.imageURL} alt={port.itemName} />
//                                 <h3>{port.itemName}</h3>
//                                 <p>{port.itemDescription}</p>
//                                 <button onClick={ () => window.open(port.itemURL) }>View site</button>
//                             </div>

//                         )
//                     })

//                 }
//             </div>

//         );
//     }
//     return ( 
//         <div className="backg">
//             <h1>  <AnimatedLetters strArray={"Portfolio".split('')} startIdx={1} /> </h1>

//             {renderPortfolio(portfolio)}

//             <Loader type = "line-scale" color = "#fed002" width = { 500 }/>     
            
//         </div>

//     )
// }


const Portfolio = () => {

    
    return ( 
        <div className="backg">

            <h1> Portfolio</h1>

            <div className="display" >
                <div className="layerOne">

                    <ul>
                        {/* mug logininpage */}
                        <a href="/mug-login.html" target="_blank" ><li className="htmlCss-left parts" ></li></a> 
                        {/* mugweb */}
                        <a href="/mug-web.html" target="_blank"><li className="htmlCss-right parts"></li></a> 
                        {/* mug cart page */}
                        <a href="/mug-cart.html" target="_blank"><li className="js-cart parts"></li></a>
                        {/* weatherApp-dom APIs */}
                        <a href="/weatherApp.html" target="_blank"><li className="js-DOM parts"></li></a>

                        
                         {/* <a href="#" target="_blank"><li className="firebase parts"></li></a>   */}

                       

                        {/* <a href="#" target="_blank"><li className="react-todolist parts"></li></a>  */}
                        
                       

                        {/* <li className="reactA parts">

                            <a href="/loginPage.html" target="_blank">Link to my HTML file</a>

                        </li> */}
                    </ul>
                </div>



            </div>
           
            
 
            {/* <div className="caroBox">
                <Carousel />
            </div>  */}
        </div>

        

        

    )
}

export default Portfolio;