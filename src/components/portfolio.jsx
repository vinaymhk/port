import React, { Component} from "react";
import "./styles.css";
// import "./sty.css";
import "./scrip.js";
import { FaFacebook } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { GrTwitter } from "react-icons/gr";
import { AiFillLinkedin, AiFillSkype } from "react-icons/ai";
import { Button} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import logo from './logo.png';
import vin from './vin.png';
import res from './vresume.pdf';
import portjhome from './portjoke/Home.png';
import portjget from './portjoke/Getjoke.png';
import portjadd from './portjoke/AddJoke.png';
import portresult from './portjoke/result.png';
import portdatabase from './portjoke/database.png'
import portbhome from './portblood/homeblood.png';
import portbregistration from './portblood/registration.png';
import portbfinddonor from './portblood/finddonor.png';
import portehome from './portecomerce/home.png';
import portecategory from './portecomerce/category.png'
import portecompare from './portecomerce/compare.png';
import portecompareresult from './portecomerce/compareresults.png';
import porteresult from './portecomerce/result.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";






export default function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#c1e1c5" }}>
            <img class="photo" src={vin} alt="Vin" />
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg> Vinay Muppala /
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
            <div>
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavbar"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="navbar-brand">
                                    <Link to="/"><p style={{ color: '#BBE3CF' }}>Home</p></Link>

                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="navbar-brand">
                                    <Link to="/resume"><p style={{ color: '#BBE3CF' }}>Resume</p></Link>

                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="navbar-brand">
                                    <Link to="/portf"><p style={{ color: '#BBE3CF' }}>Portfolio</p></Link>

                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="navbar-brand">
                                    <Link to="/about"><p style={{ color: '#BBE3CF' }}>About</p></Link>

                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="navbar-brand">
                                    <Link to="/contact"><p style={{ color: '#BBE3CF' }}>Contact</p></Link>

                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        

        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/portf"><Portfolio /></Route>
          <Route path="/resume"><Resume /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
        </div>
      
    </Router>
  );
}

function Home() {
 
  return (
    <React.Fragment>

      <div class="head">
        <div style={{ backgroundColor: "#c1e1c5" }}>

          <h2 style={{ textAlign: "center" }}>Vinay Muppala</h2><br></br>

          <h5 style={{ textAlign: "center" }} >
           Computer Science Gradute | Actively seeking Full-time Job Opportunities | Passionate Problem Solver</h5>
          <h6 style={{ textAlign: "center" }}>Proficient in UI Development. Good at Implementing Single page responsive applications</h6>
          <h6 style={{ textAlign: "center" }}>Highly Motivated Team Player with strong problem solving, communication, analytical, documentational and organizational skills</h6>
        </div>
      </div>

      <div class='socialdiv' style={{ backgroundColor: "#c1e1c0" }}>
        <h7 style={{ textAlign: "center" }}>
          <em>Social Media</em></h7> <br></br>
        <a target='_blank' href='https://github.com/vinaymhk/' class='git social'><VscGithubInverted size='25px' /></a>
        <a target='_blank' href='https://www.linkedin.com/in/m-vinay/' class='linkedin social' ><AiFillLinkedin size='25px' /></a>
        <a target='_blank' href='https://www.facebook.com/vinay.muppala.9/' class='facebook social'><FaFacebook size='25px' /></a>
        <a target='_blank' href='https://join.skype.com/invite/xC1o39iiKcY1' class='skype social'><AiFillSkype size='25px' /></a>
        <a target='_blank' href='https://twitter.com/vinay_muppala' class='twitter social'><GrTwitter size='25px' /></a>

      </div>


    </React.Fragment>
  );

}

function About() {
  return (
    <div class="float-container">

      <div class="float-child">

        <div class="float-chd1">
          <img class="logo" src={logo} alt="Logo" height="100%" width="100%" />
        </div>

        <div class="float-chd2">
        
          <h7 style={{ textAlign: "center" }}><em textAlign="center">Let's Connect:</em></h7> <br></br>
        <a target='_blank' href='https://github.com/vinaymhk/' class='git socialabout'><VscGithubInverted size='25px' /></a>
        <a target='_blank' href='https://www.linkedin.com/in/m-vinay/' class='linkedin socialabout' ><AiFillLinkedin size='25px' /></a>
        <a target='_blank' href='https://www.facebook.com/vinay.muppala.9/' class='facebook socialabout'><FaFacebook size='25px' /></a>
        <a target='_blank' href='https://join.skype.com/invite/xC1o39iiKcY1' class='skype socialabout'><AiFillSkype size='25px' /></a>
        <a target='_blank' href='https://twitter.com/vinay_muppala' class='twitter socialabout'><GrTwitter size='25px' /></a>
             </div>
      </div>



      <div class="class=w3-col m6 w3-padding-large float-child3">
        Float Column 3ssbfbfbgdsh
        sbjhgbjhgbjhdg
           fhjdbgjhdsbg<br></br>
           bdbgb<br></br>
           cbnxzmcxz<br></br>
           x vzxvxv<br></br>
           v xm vm<br></br>
           akjbfakjfba
          </div>


    </div>
  );
}

function Resume() {

  return (
    <div class="resume">
      <embed src={res} alt="Resume" type="application/pdf" width="100%" height="600px" />
    </div>
  );
}

function Portfolio() {
  return (
    <React.Fragment>
      <div class="port">
      <Router>
    <h2>Portfolio</h2>
    
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
          
    
          <div class="portfol" id="collapsibleNavbar">
            <div class="rows">
              <div class="joke">
                
                  <Link to="/joke" class="navbar-brand1"><p style={{ color: '#BBE3CF' }}>The Joke Fatory</p></Link>
                 
              
              </div>
             
              <div class="blood">
                
                  <Link to="/blood" class="navbar-brand1"><p style={{ color: '#BBE3CF' }}>Blood Donation System</p></Link>
                  
              
              </div>

              <div class="ecommerce">
                
                  <Link to="/ecommerce"><p class="navbar-brand1"  style={{ color: '#BBE3CF' }}> Comparing Multiple Ecommerce </p></Link>
                
                </div>
             
              
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/joke"><Joke /></Route>
          <Route path="/blood"><Blood/></Route>
          <Route path="/ecommerce"><Ecommerce /></Route>
        </Switch>

        </Router>
        </div>

    </React.Fragment>
  );
}


function Joke() {
return(
  <div class="jhead container">
      <h3>About Joke Factory</h3>
      <div class="jbody row" >
        <div class="jdescription col-xs-12">

        <h4> Description: </h4>
        <h6> gjghkdfgkhdfghkdfhkdfkdfhkjhfkndjh </h6>

        </div>

        <div class="jskills col-xs-12">
        <h4> Skills: </h4>
        <h6>PHP</h6> <h6>JavaScript</h6> <h6>Mysql</h6> <h6>Bootstrap</h6> <h6>HTML</h6> <h6>CSS</h6>


        </div>

        <div class="jgit col-xs-12">
          <h4> Git Link</h4>
          <a target='_blank' href='https://github.com/vinaymhk/' class='git socialabout'>Git Clone<VscGithubInverted size='25px' /></a>
          <a target='_blank' href='https://www.linkedin.com/in/m-vinay/' class='linkedin socialabout' >Git Repository<AiFillLinkedin size='25px' /></a>
          </div>

        <div class="jscreenshort col-xs-12">
          <h4> Screen Shots</h4>
          <div class="jscreen"><img class="portjhomeimg" src={portjhome} alt="Home" /></div>
          <div class="jscreen"><img class="portjhomeimg" src={portjget} alt="Get Joke" /></div>
          <div class="jscreen"><img class="portjhomeimg" src={portjadd} alt="Add Joke" /></div>
          <div class="jscreen"><img class="portjhomeimg" src={portresult} alt="result"/></div>
          <div class="jscreen"><img class="portjhomeimg" src={portdatabase} alt="database"/></div>
           </div>



      </div>



  </div>
);

}

function Blood() {
  return(
  
     <div class="jhead">
      <h3>About Blood Donation System</h3>
    
    <div class="jbody">
      <div class="jdescription">

      <h4> Description: </h4>
      <h6> gjghkdfgkhdfghkdfhkdfkdfhkjhfkndjh </h6>

      </div>

      <div class="jskills">
      <h4> Skills: </h4>
      <h6>PHP</h6> <h6>JavaScript</h6> <h6>Mysql</h6> <h6>Bootstrap</h6> <h6>HTML</h6> <h6>CSS</h6>


      </div>

      <div class="jgit">
        <h4> Git Link</h4>
        <a target='_blank' href='https://github.com/vinaymhk/' class='git socialabout'>Git Clone<VscGithubInverted size='25px' /></a>
        <a target='_blank' href='https://www.linkedin.com/in/m-vinay/' class='linkedin socialabout' >Git Repository<AiFillLinkedin size='25px' /></a>
        </div>

      <div class="jscreenshort">
        <h4> Screen Shots</h4>
        <img class="portjhomeimg" src={portbhome} alt="Home" />
        <img class="portjhomeimg" src={portbregistration} alt="Get Joke" />
        <img class="portjhomeimg" src={portbfinddonor} alt="Add Joke" />
     
         </div>



    </div>



</div>
  );
  
  }

  function Ecommerce() {
    return(
    

     
      <div class="jhead">
         <h3>About Multiple Ecommerce</h3>
    
    <div class="jbody">
      <div class="jdescription">

      <h4> Description: </h4>
      <h6> gjghkdfgkhdfghkdfhkdfkdfhkjhfkndjh </h6>

      </div>

      <div class="jskills">
      <h4> Skills: </h4>
      <h6>PHP</h6> <h6>JavaScript</h6> <h6>Mysql</h6> <h6>Bootstrap</h6> <h6>HTML</h6> <h6>CSS</h6>


      </div>

      <div class="jgit">
        <h4> Git Link</h4>
        <a target='_blank' href='https://github.com/vinaymhk/' class='git socialabout'>Git Clone<VscGithubInverted size='25px' /></a>
        <a target='_blank' href='https://www.linkedin.com/in/m-vinay/' class='linkedin socialabout' >Git Repository<AiFillLinkedin size='25px' /></a>
        </div>

      <div class="jscreenshort">
        <h4> Screen Shots</h4>
        <img class="portjhomeimg" src={portehome} alt="Home" />
        <img class="portjhomeimg" src={portecategory} alt="category" />
        <img class="portjhomeimg" src={portecompare} alt="compare" />
        <img class="portjhomeimg" src={portecompareresult} alt="Comapre Result" />
        <img class="portjhomeimg" src={porteresult} alt="result" />
         </div>



    </div>



</div>
    
    );
    
    }
    
  

function Contact() {
  return (
      
    <div class="container">  
  <Form>
  <Form.Group controlId="formBasicText">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Full Name" name="name" />

  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email"/>
    <Form.Text class="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label>Subject</Form.Label>
    <Form.Control type="text" placeholder="Enter Subject" name="subject" />
   </Form.Group>

  <Form.Group controlId="Form.ControlTextarea">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="3" name="message" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
  );


}



