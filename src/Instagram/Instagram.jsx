 import InstagramPic from '../images/instagrampic.png';
 import './Instagram.css';
 
 const Instagram = () => {
     return ( 
         <div className="div-instagram"> 
            <h1 className="h1-instagram">Follow us on Instagram!</h1> 
            <a href="https://www.instagram.com/x.tiletx/">
               <img className="instagram-icon" src={InstagramPic} alt="Instagram Icon" />
            </a>
         </div>
      );
 }
 
export default Instagram;