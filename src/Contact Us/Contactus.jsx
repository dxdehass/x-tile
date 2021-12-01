import './Contactus.css';

const Contactus = () => {
    return ( 
        <div className= "contact-div">
            <h1>Contact Us</h1>
                <br />
            <h2>Schedule an In-Home Estimate</h2>
            <div className="contact-form">
                <form>
                    <label for="name"></label>
                        <input type="text" name="name" id= "name" placeholder="Name" />
                    <label for="email"></label>
                        <input type="email" name="email" id="email" placeholder="Email" />
                    <label for="phone"></label>
                        <input type="text" name="phone" id="phone" placeholder="Phone" />
                    <label for="address"></label>
                        <input type="text" name="address" id="address" placeholder="Address (City, Street, Zip Code)" />
                    <label for="project"></label>
                        <textarea type="text" name="project" id="project" placeholder="Project Description" />
                    <div>
                        <input className="button" type="submit" value="SEND" />
                    </div>
                 </form>
             </div>
             <p>
                 This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
             </p>
             <br />
             <br />
             <br />
             <br />
             <br />
             <hr />
             <br />
             <div className="footer">
             <p className="copyright">
                Copyright © 2021 Xavier Tile - All Rights Reserved.
            </p>
            <p className="godaddy">Powered by GoDaddy
            </p>
            </div>
        </div>
     );
}
 
export default Contactus;