import './Photogallery.css';
import ShowerPan from '../images/1x3pan.png';
import Floor from '../images/12x24-floor.png';
import OutsideFloor from '../images/12x24-floor2.png';
import Niche from '../images/12x24-niche.png';
import Accent from '../images/accentbs.png';
import Blue from '../images/bluebs.png';
import Commercial from '../images/commercial.png';
import Davis from '../images/davis-niche.png';
import DoubleNiche from '../images/double-niche.png';
import GlassWindow from '../images/glass-window.png';
import GlassBS from '../images/glassbs.png';
import MiteredJamb from '../images/mitered-jamb.png';
import MiteredNiche from '../images/mitered-niche.png';
import MudWork from '../images/mud-work.png';
import ParentsFloor from '../images/parents-floor.png';
import ParentsShower from '../images/parents-shower.png';
import PebblePan from '../images/pebble-pan.png';
import ReturnWall from '../images/return-wall.png';
import SubwayJamb from '../images/subway-jamb.png';
import SubwayShower from '../images/subway-shower.png';
import WideShower from '../images/wide-shower.png';

const Photogallery = () => {
    return ( 
    <div>
        <h1 className= "h1-photo">Project Gallery</h1>
        <div className= "photo-grid">
            <div className="column1">
                <img className="pebble-pan"src={PebblePan} alt="Pebble Pan" />
                <img className="Commercial" src={Commercial} alt="Commercial" />
                <img className="parents-floor" src={ParentsFloor} alt="Parents Floor" />
                <img className="shower-pan" src={ShowerPan} alt="Shower Pan" />
                <img className="mitered-jamb" src={MiteredJamb} alt="Mitered Jamb" />
                <img className="outside-floor" src={OutsideFloor} alt="Outside Floor" />
                <img className="Floor" src={Floor} alt="Floor" />
            </div>
            <div className= "column2">
                <img className="Davis" src={Davis} alt="Davis" />
                <img className="double-niche" src={DoubleNiche} alt="Double Niche" />
                <img className="glass-bs" src={GlassBS} alt="Glass Backsplash" />
                <img className="Blue" src={Blue} alt="Blue Backsplash" />
                <img className="parents-shower" src={ParentsShower} alt="Parents Shower" />
                <img className="subway-shower" src={SubwayShower} alt="Subway Shower" />
                <img className="Accent" src={Accent} alt="Accent Backsplash" />
            </div>
            <div className="column3">
                <img className="return-wall" src={ReturnWall} alt="Return Wall" /> 
                <img className="Niche" src={Niche} alt="Niche" />
                <img className="glass-window" src={GlassWindow} alt="Glass Window" /> 
                <img className="wide-shower" src={WideShower} alt="Wide Shower" />
                <img className="mitered-niche" src={MiteredNiche} alt="Mitered Niche" />
                <img className="subway-jamb" src={SubwayJamb} alt="Subway Jamb" />
                <img className="mud-work" src={MudWork} alt="Mud Work" />
            </div>
         </div>
    </div>
     );
}
 
export default Photogallery;
