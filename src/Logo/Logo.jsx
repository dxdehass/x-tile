import XTileLogo from '../images/xtilelogo.png';
import GlassNiche from '../images/glassniche.png';
import './Logo.css';


const Logo = () => {
    
    return (
        
        <div className="logo-container" >
            <div className="flex-container">
                <img className="xlogo" src={XTileLogo} alt="xtile logo" />    
                <h1> Xavier Tile - Serving Dallas/Fort <br />Worth and surrounding areas!</h1>
                <button>Request An Estimate</button>
            </div>
            <img className="glass" src={GlassNiche} alt="Glass Niche" />
        </div>
      );
}
 
export default Logo;