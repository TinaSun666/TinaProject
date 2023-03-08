import './index.scss';
import Loader from'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {MapContainer, Marker, TileLayer, Popup} from 'react-leaflet';
// import * as leaflet from 'leaflet'; //* means all things
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

function comingsoon () {
    alert ("Coming Soon")
}
const Contact = () => {
    return ( 
        <>

            <div className="contact-page">
                <div className="container">
                    <div className="left-side">
                        <h1> <AnimatedLetters strArray={"Contact Me".split('')} startIdx={1} /></h1>
                        <div className="contact-form">
                            <form>
                                <div className="form-row">
                                    <input type="text" name="name" placeholder="Name"></input>
                                    <input type="email" name="email" placeholder="Email"></input>
                                </div>

                                <div className="form-row">
                                    <textarea name="message" placeholder="Message"></textarea>
                                </div>

                                <div className="form-row">
                                    <input type="submit" className="form-submit" value="Submit" onClick={comingsoon}></input>
                                </div>

                            </form>
                        </div>
                    </div>

                    <div className="right-side">

                        <div className="map-info">

                            <p>Working remotely
                                <br/>
                                Based in Melbourne
                                <br/>
                                VIC, Australia
                                <br/>
                                <span>tina0426599117@gmail.com</span>
                            </p>

                        </div>
                        <div className="map-wrapper">
                            <MapContainer center={[-37.926346, 145.188592]} zoom={11}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[-37.926346, 145.188592]} icon={DefaultIcon}>
                                    <Popup>
                                        It all starts with a line of Javascrip.
                                    </Popup>

                                </Marker>


                            </MapContainer>
                            
                        </div>
                        

                    </div>
                </div>
            </div>



            
            {/* <Loader type="line-scale" color="#fed002" width={500} />     */}
        </>
        
        
    )
}

export default Contact;