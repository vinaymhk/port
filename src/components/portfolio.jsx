import React from "react";
import "./styles.css";
import "./scrip.js";
import { FaFacebook, FaStarOfLife } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { GrTwitter } from "react-icons/gr";
import { AiFillLinkedin, AiFillSkype } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import logo from "./logo.png";
import emailjs from "emailjs-com";
import vin from "./vin.png";
import res from "./VinayResume.pdf";
import portjhome from "./portjoke/Home.png";
import portjget from "./portjoke/Getjoke.png";
import portjadd from "./portjoke/AddJoke.png";
import portresult from "./portjoke/result.png";
import portdatabase from "./portjoke/database.png";
import portbhome from "./portblood/homeblood.png";
import portbregistration from "./portblood/registration.png";
import portbfinddonor from "./portblood/finddonor.png";
import portehome from "./portecomerce/home.png";
import portecategory from "./portecomerce/category.png";
import portecompare from "./portecomerce/compare.png";
import portecompareresult from "./portecomerce/compareresults.png";
import porteresult from "./portecomerce/result.png";
import gitjokel from "./gitjokel.png";
import gitbloodl from "./gitbloodl.png";
import gitecommercel from "./gitecommercel.png";
import gitfportl from "./gitfportl.png";
import gitvirusl from "./gitvirusl.png";
import gitcalculatorl from "./gitcalculatorl.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



 

export default function App() {

  return (
    <Router>
      <div
        class="main container1"
        style={{ backgroundColor: "#498dbf", opacity: "88%" }}
      >
        <div class="imgname row">
          <img class="photo" src={vin} alt="Vin" />
          <div>
            <div class="card-title"
              style={{
                color: "#ffffff",
                textAlign: "left",
                paddingTop: "40px",
              }}
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-chevron-left"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
              Vinay M/
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-chevron-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <nav class="navbar navbar-expand-md  navbar-dark">
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
                <li class="nav-item ">
                  <a class="navbar-brand">
                    <Link to="/">
                      <p style={{ color: "#ffffff" }}>Home</p>
                    </Link>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="navbar-brand">
                    <Link to="/resume">
                      <p style={{ color: "#ffffff" }}>Resume</p>
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="navbar-brand">
                    <Link to="/portf">
                      <p style={{ color: "#ffffff" }}>Portfolio</p>
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="navbar-brand">
                    <Link to="/about">
                      <p style={{ color: "#ffffff" }}>About</p>
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="navbar-brand">
                    <Link to="/contact">
                      <p style={{ color: "#ffffff" }}>Contact</p>
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portf">
          <Portfolio />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <React.Fragment>
      <div class="head container1">
        <div class="pad card" style={{ backgroundColor: "" }}>
          <div class="card-body">
            <h2 class="crad-tile" style={{ textAlign: "center" }}>
              Vinay Muppala
            </h2>
            <br></br>

            <h6 card="card-text" style={{ textAlign: "center" }}>
              Computer Science Graduate | Actively seeking Full-time Job
              Opportunities | Passionate Problem Solver
            </h6>
            <h6 class="card-text" style={{ textAlign: "center" }}>
              Proficient in UI Development. Good at Implementing Single page
              responsive applications
            </h6>
            <h6 class="card-text" style={{ textAlign: "center" }}>
              Highly Motivated Team Player with strong problem solving,
              communication, analytical, documentational and organizational
              skills
            </h6>
          </div>
        </div>
      </div>

      <div class=" socialdiv container1" style={{ backgroundColor: "#ffffff" }}>
        <h5 style={{ textAlign: "center" }}>
          <em > Social Media</em>
        </h5>{" "}
        
        <a
          target="_blank"
          href="https://github.com/vinaymhk/"
          class="git social"
        >
          <VscGithubInverted size="25px" />
        </a>
        <a
          target="_blank"
          href=""
          class="linkedin social"
        >
          <AiFillLinkedin size="25px" />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/vinay.muppala.9/"
          class="facebook social"
        >
          <FaFacebook size="25px" />
        </a>
        <a
          target="_blank"
          href="https://join.skype.com/invite/xC1o39iiKcY1"
          class="skype social"
        >
          <AiFillSkype size="25px" />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/vinay_muppala"
          class="twitter social"
        >
          <GrTwitter size="25px" />
        </a>
      </div>
    </React.Fragment>
  );
}

function About() {
  return (
    <div class="float-container container1 ">
      <div class="float-child  col-md-4">
        <div class="float-chd1 ">
          <div>
            <img
              class="logo card-img-top"
              src={logo}
              alt="Logo"
            
            />
          </div>
        </div>

        <div class="card ">
          <div class="card-body float-chd2">
             
              <em class="card-text">Let's Connect:</em>
          
            <br></br>
            <a
              target="_blank"
              href="https://github.com/vinaymhk/"
              class="git socialabout"
            >
              <VscGithubInverted size="25px" />
            </a>
            <a
              target="_blank"
              href=""
              class="linkedin socialabout"
            >
              <AiFillLinkedin size="25px" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/vinay.muppala.9/"
              class="facebook socialabout"
            >
              <FaFacebook size="25px" />
            </a>
            <a
              target="_blank"
              href="https://join.skype.com/invite/xC1o39iiKcY1"
              class="skype socialabout"
            >
              <AiFillSkype size="25px" />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/vinay_muppala"
              class="twitter socialabout"
            >
              <GrTwitter size="25px" />
            </a>
          </div>
        </div>
      </div>

      <div class="  col-md-6  ">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"> Hello ! </h5>

            <h5 class="card-title"> I’m Vinay</h5>

            <p class="card-text">
              I am a computer science graduate with a Master’s degree in
              computer science from Fairleigh Dickinson University. Currently I
              am an aspirant, looking for full time job opportunities.
            </p>
            <p class="card-text">
              I am a passionate problem solver, learning how to program changed
              my way of viewing life. This is what has driven my passion for
              computer science and has allowed me to continue to progress in the
              field.
            </p>
            <p class="card-text">
              While pursuing my master’s degree, I worked as a student
              consultant in the Computing Services department and became well
              experienced in my skills, because I designed and developed a web
              application for the GoLunch box Club and also resolved issues
              regarding networking, hardware devices, and email’s, provided
              support to the professors and assisted students in the course.
              Before Masters, I worked as a Full-stack developer for a year and
              involved in developing Dashboards and UI pages and made them
              responsive, also used SOAP and REST services to fetch the data
              from the external Systems.
            </p>
            <p class="card-text">
              Apart from my professional life, I am a nature lover, actively
              involved in creating and innovating new objects and also I love
              cycling with my friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div class="resume container1">
      <div class="card">
        <div class="body">
          <embed
            src={res}
            alt="Resume"
            type="application/pdf"
            width="100%"
            height="600px"
            
          />
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <React.Fragment>
      <div class="port container1">
        <Router>
          <h2>Portfolio</h2>

          <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <div class="portfol" id="collapsibleNavbar">
              <div class="row">
                <div class=" col-md-4 col1">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">The Joke Factory</h5>
                      <p class="card-text">
                        The main functionality is to store the jokes given by
                        the user and also display the specific joke required by
                        the user from the database.
                      </p>
                      <p class="card-text">
                        As a developer Involved in developing login modules,
                        used MVC architecture to develop the web application,
                        removed redundancy by using Normal forms, designed
                        responsive web application using bootstrap, used
                        ReactJS, HTML, CSS for designing UI, involved in
                        establishing connection using PHP and JavaScript.
                      </p>
                      <a
                        style={{ backgroundColor: "#ffffff", color: "#3E2C00" }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/vinaymhk/Joke-Factory/archive/master.zip"
                        class="btn btn-primary git"
                      >
                        <VscGithubInverted size="25px" />
                        &nbsp;Git Clone
                      </a>
                      &nbsp;&nbsp;
                      <a
                        style={{ backgroundColor: "#ffffff", color: "#3E2C00" }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/vinaymhk/Joke-Factory"
                        class="btn btn-primary git"
                      >
                        &nbsp;&nbsp;&nbsp;
                        <VscGithubInverted size="25px" />
                        &nbsp;Git Repository
                      </a>
                      <br></br>
                      <br></br>
                      <img
                        class="card-img-top"
                        src={gitjokel}
                        alt="Card image cap"
                      ></img>
                      <Link to="/joke" class=" btn btn-outline-info  ">
                        <h8>More</h8>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 col1">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card.title">Blood Donation System</h5>
                      <p class="card-text">
                        In this application, the user can perform login module
                        operations and can utilize multiple features in the web
                        page. Finally, the main functionality is to handle the
                        blood groups and assign the required receiver to the
                        donor and allow the user to get registered as donors.{" "}
                      </p>
                      <p class="card-text">
                        As a UI Developer, completely took initiative and
                        involved in designing and developing the application
                        from scratch, majorly used PHP, JavaScript and Ajax to
                        build the application, implemented validation rules for
                        the registration form using JavaScript and made the
                        database more efficient using MySql.
                      </p>
                      <a
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#3E2C00",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/vinaymhk/Blood-Donation-System/archive/master.zip"
                        class=" btn btn-primary git"
                      >
                        <VscGithubInverted size="25px" />
                        &nbsp;Git Clone
                      </a>
                      &nbsp;&nbsp;
                      <a
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#3E2C00",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/vinaymhk/Blood-Donation-System"
                        class=" btn btn-primary git"
                      >
                        <VscGithubInverted size="25px" />
                        &nbsp;Git Repository
                      </a>
                      <br></br>
                      <br></br>
                      <img
                        class="card-img-top"
                        src={gitbloodl}
                        alt="Card blood cap"
                      ></img>
                      <Link to="/blood" class="btn btn-outline-info">
                        <h8>More</h8>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class=" col-md-4 col1">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card.title">
                        Comparing Multiple Ecommerce Websites
                      </h5>
                      <p class="card-text">
                        The main functionality is to fetch the data from
                        different e-commerce website such as Amazon, Target and
                        compare the data of that product and to display the
                        attributes like price and the rating of that product to
                        the user.{" "}
                      </p>
                      <p class="card-text">
                        Actively involved in building the web application using
                        ReactJS libraries, involved in integrating multiple
                        API’s to increase the performance of the web
                        application, written more productive queries using MySql
                        to reduce time and space complexities, added navigation
                        bar by using Router component in ReactJS and used local
                        server Apache Tom CAT to run the application in the
                        browser.
                      </p>
                      <a
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#3E2C00",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/vinaymhk/ecommerce/archive/master.zip"
                        class="btn btn-primary git"
                      >
                        <VscGithubInverted size="25px" />
                        &nbsp;Git Clone
                      </a>
                      &nbsp;&nbsp;
                      <a
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#3E2C00",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/vinaymhk/ecommerce"
                        class="btn btn-primary git"
                      >
                        &nbsp;&nbsp;&nbsp;
                        <VscGithubInverted size="25px" />
                        &nbsp;Git Repository
                      </a>
                      <br></br>
                      <br></br>
                      <img
                        class="card-img-top"
                        src={gitecommercel}
                        alt="card commerce cap"
                      ></img>
                      <Link to="/ecommerce" class="btn btn-outline-info">
                        <h8>More</h8>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 col1">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Portfolio</h5>
                      <p class="card-text">
                        This web application describes about myself and it is a
                        portfolio describing all my project which I had done
                      </p>
                      <a
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#3E2C00",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href=""
                        class="git btn btn-primary"
                      >
                        <VscGithubInverted size="25px" />
                        &nbsp;Git Clone
                      </a>
                      &nbsp;&nbsp;
                      <a
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#3E2C00",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href=""
                        class="btn btn-primary git"
                      >
                        &nbsp;&nbsp;&nbsp;
                        <VscGithubInverted size="25px" />
                        &nbsp;Git Repository
                      </a>
                      <br></br>
                      <br></br>
                      <img
                        class="card-img-top"
                        src={gitfportl}
                        alt="card image cap"
                      ></img>
                      <Link to="/porta" class="btn btn-outline-info">
                        <h8>More</h8>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 col1">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Virus Scan using API</h5>
                      <p class="card-text">
                        The Main Functionality is to Scan a file, whether it
                        consists of Virus or not
                      </p>
                      <a
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#3E2C00",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/vinaymhk/viruscanap/archive/master.zip"
                        class="git btn btn-primary"
                      >
                        <VscGithubInverted size="25px" />
                        &nbsp;Git Clone
                      </a>
                      &nbsp;&nbsp;
                      <a
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#3E2C00",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/vinaymhk/viruscanap"
                        class="git btn btn-primary"
                      >
                        &nbsp;&nbsp;&nbsp;
                        <VscGithubInverted size="25px" />
                        &nbsp;Git Repository
                      </a>
                      <br></br>
                      <br></br>
                      <img
                        class="card-img-top"
                        src={gitvirusl}
                        alt="card virus cap"
                      ></img>
                      <Link to="/viruscan" class="btn btn-outline-info">
                        <h8>More</h8>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 col1">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Calculator</h5>
                      <p class="card-text">
                        The Main Functionality of this application is to perform
                        calculations such as addition, substraction,
                        multiplication and divison.
                      </p>
                      <p class="card-text">
                        In this application, there are other advanced options
                        like count and reset.
                      </p>
                      <a
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#3E2C00",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/vinaymhk/calculator/archive/master.zip"
                        class="git btn btn-primary"
                      >
                        <VscGithubInverted size="25px" />
                        &nbsp;Git Clone
                      </a>
                      &nbsp;&nbsp;
                      <a
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#3E2C00",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/vinaymhk/calculator"
                        class="git btn btn-primary"
                      >
                        &nbsp;&nbsp;&nbsp;
                        <VscGithubInverted size="25px" />
                        &nbsp;Git Repository
                      </a>
                      <img
                        class="card-img-top"
                        src={gitcalculatorl}
                        alt="card calculator cap"
                      ></img>
                      <Link to="/calculator" class="btn btn-outline-info">
                        <h8>More</h8>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/joke">
              <Joke />
            </Route>
            <Route path="/blood">
              <Blood />
            </Route>
            <Route path="/ecommerce">
              <Ecommerce />
            </Route>
            <Route path="/porta">
              <FullPort />
            </Route>
            <Route path="/viruscan">
              <Viruscan />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

function Joke() {
  return (
    <div class="jhead container1">
      <div class="jbody row">
        <h3>Joke Factory</h3>

        <div class="jscreenshort row">
          <h4> Screen Shots:</h4>
          <div class="jscreen col">
            <img class="responsive" src={portjhome} alt="Home" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portjget} alt="Get Joke" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portjadd} alt="Add Joke" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portresult} alt="result" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portdatabase} alt="database" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Blood() {
  return (
    <div class="jhead container1">
      <div class="jbody row">
        <h3>Blood Donation System</h3>
        <div class="jscreenshort row">
          <h4> Screen Shots:</h4>
          <div class="jscreen col">
            <img class="responsive" src={portbhome} alt="Home" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portbregistration} alt="Get Joke" />
          </div>
          <div class="jscreen col">
            {" "}
            <img class="responsive" src={portbfinddonor} alt="Add Joke" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Ecommerce() {
  return (
    <div class="jhead container1">
      <div class="jbody row">
        <h3>Comparing Multiple Ecommerce Websites</h3>
        <div class="jscreenshort row">
          <h4> Screen Shots</h4>
          <div class="jscreen col">
            <img class="responsive" src={portehome} alt="Home" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portecategory} alt="category" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portecompare} alt="compare" />
          </div>
          <div class="jscreen col">
            <img
              class="responsive"
              src={portecompareresult}
              alt="Comapre Result"
            />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={porteresult} alt="result" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FullPort() {
  return (
    <div class="jhead container1">
      <div class="jbody row">
        <h3>Portfolio</h3>
        <div class="jscreenshort row">
          <h4> Screen Shots:</h4>
          <div class="jscreen col">
            <img class="responsive" src={portjhome} alt="Home" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portjget} alt="Get Joke" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portjadd} alt="Add Joke" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portresult} alt="result" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portdatabase} alt="database" />
          </div>
        </div>
      </div>
    </div>
  );
}
function Viruscan() {
  return (
    <div class="jhead container1">
      <div class="jbody row">
        <h3>Virus Scan using API</h3>

        <div class="jscreenshort row">
          <h4> Screen Shots:</h4>
          <div class="jscreen col">
            <img class="responsive" src={portjhome} alt="Home" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portjget} alt="Get Joke" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portjadd} alt="Add Joke" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portresult} alt="result" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portdatabase} alt="database" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Calculator() {
  return (
    <div class="jhead container1">
      <div class="jbody row">
        <h3>Calculator</h3>
        <div class="jdescription row">
          <h4> Description: </h4>
          <p>
            <h6>
              {" "}
              The main functionality is to store the jokes given by the user and
              also display the specific joke required by the user from the
              database.{" "}
            </h6>
          </p>
          <p>
            <h6>
              As a developer Involved in developing login modules, used MVC
              architecture to develop the web application, removed redundancy by
              using Normal forms, designed responsive web application using
              bootstrap, used ReactJS, HTML, CSS for designing UI, involved in
              establishing connection using PHP and JavaScript.
            </h6>
          </p>
        </div>
        <div class="row">
          <div class="jskills col">
            <h4> Skills: </h4>
            <div class="gitlink1">
              <h6>PHP</h6>
            </div>{" "}
            <h6>JavaScript</h6> <h6>Mysql</h6> <h6>Bootstrap</h6> <h6>HTML</h6>{" "}
            <h6>CSS</h6>
          </div>

          <div class="jgit col">
            <h4> Git Link</h4>
            <div class="gitlink">
              <a
                target="_blank"
                href="https://github.com/vinaymhk/Joke-Factory/archive/master.zip"
                class="git socialabout"
              >
                <VscGithubInverted size="25px" />
                &nbsp;Git Clone
              </a>
            </div>
            <div class="gitlink">
              <a
                target="_blank"
                href="https://github.com/vinaymhk/Joke-Factory"
                class="git socialabout"
              >
                <VscGithubInverted size="25px" />
                &nbsp;Git Repository
              </a>
            </div>
          </div>
        </div>
        <div class="jscreenshort row">
          <h4> Screen Shots:</h4>
          <div class="jscreen col">
            <img class="responsive" src={portjhome} alt="Home" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portjget} alt="Get Joke" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portjadd} alt="Add Joke" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portresult} alt="result" />
          </div>
          <div class="jscreen col">
            <img class="responsive" src={portdatabase} alt="database" />
          </div>
        </div>
      </div>
    </div>
  );
}

function sendEmail(e)
  {
        e.preventDefault();

        emailjs
          .sendForm(
            "gmail",
            "template_xgqja4o",
            e.target,
            "user_w3RHKGgyvOZfd8SfOCyHk"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );

          e.target.reset()
  }



  
function Contact() {
  return (
    <div class="container">
      <Form onSubmit={sendEmail} method="POST">
        <Form.Group controlId="formBasicText">
          <Form.Label>
            Full Name
            <FaStarOfLife
              size="5.5px"
              color="#FA5F3F"
              style={{ verticalAlign: "top" }}
            />
          </Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter Full Name"
            name="name"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            Email address
            <FaStarOfLife
              size="5.5px"
              color="#FA5F3F"
              style={{ verticalAlign: "top" }}
            />
          </Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="Enter email"
            name="email"
          />
          {/* <Form.Text class="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>
            Subject
            <FaStarOfLife
              size="5.5px"
              color="#FA5F3F"
              style={{ verticalAlign: "top" }}
            />
          </Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter Subject"
            name="subject"
          />
        </Form.Group>
        <Form.Group controlId="Form.ControlTextarea">
          <Form.Label>
            Message
            {/* <FaStarOfLife
              size="5.5px"
              color="#FA5F3F"
              style={{ verticalAlign: "top" }}
            /> */}
          </Form.Label>
          <Form.Control as="textarea" rows="3" name="message" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}


