import './index.scss';
import Loader from'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {Link, NavLink} from 'react-router-dom';


const Home = () => { 
    return(
        <div className="home-page">
            <div className="bac">
                <h1> 
                    <AnimatedLetters strArray={"Hello, I'am Tiantian Sun".split('')} startIdx={1} />
                    <br />
                    <AnimatedLetters strArray={"Front End Web Developer".split('')} startIdx={14} />
                    
                    
                </h1>
                <Loader type="line-scale" color="#fed002" width={500} />  

                <div className="learnmore">
                    <a href=''>
                    
                    
                    <NavLink exact='true' activeclassname="active" to="/about" className="about-link">
                        <AnimatedLetters strArray={"About Me".split('')} startIdx={20} />
                    </NavLink>
                    
                    </a>

                </div> 

                <div className="portfolio">
                    <a href=''>
                    
                    
                    <NavLink exact='true' activeclassname="active" to="/portfolio" className="about-link">
                        <AnimatedLetters strArray={"Portfolio ".split('')} startIdx={23} />
                    </NavLink>
                    
                    </a>

                </div> 

            

            </div> 
        </div>
    
    )

}

export default Home;