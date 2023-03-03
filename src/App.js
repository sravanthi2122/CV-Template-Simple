import { faFacebookF, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faAsterisk, faBriefcase, faCalendar, faCertificate, faEnvelope, faGlobe, faHome, faPhone, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './App.css';
import pic1 from'./Profilepic.jpg';

function App() {
  return (
    <div className="w3-light-grey">
      <div className="w3-content w3-margin-top" style={{maxWidth:"1400px"}}>
        <div className="w3-row-padding">
           <div className="w3-third">
    <div className="w3-white w3-text-grey w3-card-4">
      <div className="w3-display-container">
        <img src={pic1} style={{width:"100%"}} alt="Profilepic" />
        <div className="w3-display-bottomleft w3-container w3-text-black">
          <h2>Sravanthi</h2>
        </div>
      </div>
      <div className="w3-container">
        <p><i className="  w3-margin-right w3-large w3-text-teal"><FontAwesomeIcon icon={faBriefcase} fixedWidth/></i>Jr.Web Developer</p>
        <p><i className=" w3-margin-right w3-large w3-text-teal"><FontAwesomeIcon icon={faHome} fixedWidth/></i>Andhra Pradesh,India</p>
        <p><i className=" w3-margin-right w3-large w3-text-teal"><FontAwesomeIcon icon={faEnvelope} fixedWidth/></i>mounica.172@gmail.com</p>
        <p><i className="w3-margin-right w3-large w3-text-teal"><FontAwesomeIcon icon={faPhone} fixedWidth/></i>8328577834</p>
        <hr></hr>

        <p className="w3-large"><b><i className="w3-margin-right w3-text-teal"><FontAwesomeIcon icon={faAsterisk} fixedWidth/></i>Skills</b></p>
        <p>HTML</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"90%"}}>90%</div>
        </div>
        <p>CSS</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"80%"}}>
            <div className="w3-center w3-text-white">80%</div>
          </div>
        </div>
        <p>ReactJs</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"75%"}}>75%</div>
        </div>
        <p>Laravel</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"50%"}}>40%</div>
        </div>
        <br></br>

        <p className="w3-large w3-text-theme"><b>
          <i className="w3-margin-right w3-text-teal">
          <FontAwesomeIcon icon={faGlobe} fixedWidth/></i>Languages</b></p>
        <p>English</p>
        <div className="w3-light-grey w3-round-xlarge">
          <div className="w3-round-xlarge w3-teal" style={{height:"24px",width:"80%"}}></div>
        </div>
        <p>Telugu</p>
        <div className="w3-light-grey w3-round-xlarge">
          <div className="w3-round-xlarge w3-teal" style={{height:"24px",width:"55%"}}></div>
        </div>
      <br></br>
      </div>
    </div><br></br>
</div>
<div className="w3-twothird">
  <div className="w3-container w3-card w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16">
        <i className="w3-margin-right w3-xxlarge w3-text-teal"><FontAwesomeIcon icon={faSuitcase} fixedWidth/></i>Work Experience</h2>
      <div className="w3-container">
        <h5 className="w3-opacity"><b>jr.Web Developer / Arowana Software Solutions</b></h5>
        <h6 className="w3-text-teal">
          <i className="w3-margin-right"><FontAwesomeIcon icon={faCalendar} fixedWidth/></i>Jan 2020 -2022</h6>
        <p>Worked as a jr.Web Developer on React and laravel projects</p>
        <hr></hr>
      </div>
      
     </div>

    <div className="w3-container w3-card w3-white">
      <h2 className="w3-text-grey w3-padding-16">
        <i className="w3-margin-right w3-xxlarge w3-text-teal"><FontAwesomeIcon icon={faCertificate} fixedWidth/></i>Education</h2>
      <div className="w3-container">
        <h5 className="w3-opacity"><b>Avanthi's Research and Technological Academy</b></h5>
        <h6 className="w3-text-teal"><i className="w3-margin-right"><FontAwesomeIcon icon={faCalendar} fixedWidth/></i>2011-2015</h6>
        <p>B.Tech(EEE)</p>
        <hr></hr>
      </div>
      <div className="w3-container">
        <h5 className="w3-opacity"><b>NRI Junior collage</b></h5>
        <h6 className="w3-text-teal"><i className="w3-margin-right"><FontAwesomeIcon icon={faCalendar} fixedWidth/></i>2009-2011</h6>
        <p>Intermediate</p>
        <hr></hr>
      </div>
      <div className="w3-container">
        <h5 className="w3-opacity"><b>Prasanthi Niketan english medium high school</b></h5>
        <h6 className="w3-text-teal"><i className="w3-margin-right"><FontAwesomeIcon icon={faCalendar} fixedWidth/></i>2008-2009</h6>
        <p>10th</p><br></br>
      </div>
    </div>
  </div>
  </div>
</div>

<footer className="w3-container w3-teal w3-center w3-margin-top">
<p>Find me on social media.</p>
<FontAwesomeIcon  icon={faFacebookF} style={{width: "20px", height: "20px", margin: "0 5px"}}/>
<FontAwesomeIcon icon={faInstagram} style={{width: "20px", height: "20px", margin: "0 5px"}}/>
<FontAwesomeIcon icon={faLinkedin} style={{width: "20px", height: "20px", margin: "0 5px"}}/>

</footer>
    </div>
  
  );
}

export default App;
