import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
    
      
      export default function App() {
        return (
          <Router>
            <div>
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                  <a class="navbar-brand">
                
                    
                  </a>
        
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
                        <Link to="/"><p style={{ color:'#BBE3CF' }}>Home</p></Link>
                  
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="navbar-brand">
                        <Link to="/portf"><p style={{ color:'#BBE3CF' }}>Portfolio</p></Link>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="navbar-brand">
                        <Link to="/about"><p style={{ color:'#BBE3CF' }}>About</p></Link>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="navbar-brand">
                        <Link to="/contact"><p style={{ color:'#BBE3CF' }}>Contact</p></Link>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>

            
      
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/portf">
                  <Portfolio />
                </Route>
                <Route path="/contact">
                  <Contact/>
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        );
      }
      
      function Home() {
  
        return(
            <React.Fragment>
               
              <div class="head">
                <h1> Header</h1>
              </div>
      
              <div>
                <h1> BODY</h1>
              </div>
              <div class="spinner-border text-success"></div>
      
              <div>
                <h1>Footer</h1>
                
              </div>
      
            </React.Fragment>
          );
        
      }
      
      function About() {
        return <h2>About</h2>;
      }
      function Portfolio() {
        return (
          <React.Fragment>
               
          <div class="head">
            Coming soon
          </div>
  
          <div>
            
          </div>
  
          <div>
            
          </div>
  
        </React.Fragment>
        );
      }
      
      function Contact() {
        return <h2>Conatct</h2>;
      }
     


