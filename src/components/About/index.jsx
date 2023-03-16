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

        <div className="profile">
            <h2>Profilo</h2>
            <p>Qualifications in JavaScript with project experience in web development using HTML, CSS, JavaScript and React. Background in marketing and agricultural science consulting. Working with all stakeholders to provide high quality services to meet strategic business objectives.
            </p>
        </div>


        <div className="experience">
            

             <div className="timeline">
                
                <div className="container left">
                    <div className="date">2022&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    
                    <div className="content">
                    <h2>JavaScript Development</h2>
                    <p> General Assembly</p>
                    <p>
                        Learnt HTML, CSS, JavaScript and React, and finished a personal website. 
                    </p>
                    </div>
                </div>
                <div className="container right">
                    <div className="date">2020 - 2022</div>
                    
                    <div className="content">
                    <h2>Marketing Coordinator</h2>
                    <p>
                    Developed and organized numbers of webinars / event activations and project management including venue, supplier and partner liaison, run sheets and management of invitations.
                    </p>
                    </div>
                </div>
                <div className="container left">
                    <div className="date">2021&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    
                    <div className="content">
                    <h2>Executive Assistant</h2>
                    <p>
                    Developed productive relationships with clients and successfully invitation management, and coordinated with staff of State Library of Victoria about venue fee and relevant services they provided

                    </p>
                    </div>
                </div>

                <div className="container right">
                    <div className="date">2020 - 2021</div>
                    
                    <div className="content">
                    <h2>Agricultural Consultant</h2>
                    <h2>Biowin Fertilisers Australia Pty Ltd</h2>
                    <p>
                    Collected soil and leaf samples for nutrient analysis, and developed Crop Nutrition programs for clients

                    </p>
                    </div>
                </div>
                <div className="container left">
                    <div className="date">2019 - 2020</div>
                    
                    <div className="content">
                    <h2>Agricultural Consultant</h2>
                    <h2>Seawin Biotech Australia Pty Ltd</h2>
                    <p>
                    Collected soil and leaf samples for nutrient analysis, and developed Crop Nutrition programs for clients

                    </p>
                    </div>
                </div>

                <div className="container right">
                    <div className="date dateshort">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019</div>
                    
                    <div className="content">
                    <h2>Waitress</h2>
                    <h2>Sushi Sushi </h2>
                    <p>
                    Provided Customer service in restaurant. and recommend proper food packages to customers with different demands

                    </p>
                    </div>
                </div>

                <div className="container left">
                    <div className="date">2018&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    
                    <div className="content">
                    <h2>Volunteer</h2>
                    <h2>Australia - China Trade Expo</h2>
                    <p>
                    Provided information for over 100 agents, broadcasted information in both mandarin and English to advertise products of onsite exhibitors, and reconciled the issues between agents and customers

                    </p>
                    </div>
                </div>
                <div className="container right">
                    <div className="date">2016 - 2018</div>
                    <i className="icon fa fa-gift"></i>
                    <div className="content">
                    <h2>Master of Agricultural Sciences - Agribusiness</h2>
                    <p>
                    University of Melbourne
                    </p>
                    </div>
                </div>

                <div className="container left">
                    <div className="date">2011 - 2015</div>
                   
                    <div className="content">
                    <h2>Bachelor of Food Science</h2>
                    <p>
                    Shandong Agricultural University

                    </p>
                    </div>
                </div>
               
            </div>
       
        </div>
    
    </div> 
    );
}

export default About;
















