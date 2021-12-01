import Selfie from '../images/selfie.png';
import './Aboutus.css';

const Aboutus = () => {
    return (
<div>
<h1>About Us</h1>
    <div className= "aboutus-flex">
        <div className= "left">
            <h2> Xavier Tile - An Old School Tile Company</h2>
            <p>Xavier Tile was established in 2019 and is owned and operated by Devin X. DeHass. He is married to his wife Diana with 3 small children, Daisy (3), Jason (2) and Clara (9 months). Devin learned the tile trade in Sacramento, CA, starting at the age of 19 years old. Devin had the privilege of learning under multiple very talented tile setters, the most well known being Isaac Ostrom, also known as "TileCoach" on YouTube with over 100,000 subscribers. You can look up some of his videos in which Devin is featured. Xavier Tile is interested in building life long lasting tile installations and promoting the "old school" tiling methods, specifically, mud work.</p>
        </div> 
         <img className="Devin" src={Selfie} alt= "Self Portrait of Owner"/>
        <div className= "right">
            <h2>Our Services</h2>
            <ul>
                <li>Showers</li>
                <li>Floors</li>
                <li>Back Splashes</li>
                <li>Fire Places</li>
                <li>Anywhere you want to put tile!</li>
            </ul>
        </div>
    </div>
</div>
     );
}
 
export default Aboutus;
 
