import React, { Component } from "react";




class Home extends Component {
  state = {
    count: 0,
    imageurl: "https://picsum.photos/200",
    tags: ["sdf", "vinay"],
  };
  render() {
    return (
      <React.Fragment>
         
        <div class="head">
          <h1> Header</h1>
        </div>

        <div>
          <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <a class="navbar-brand" href="home.jsx">
              Home
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
                  <a class="nav-link" href="portfolio.jsx">
                    Portfolio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          

          <h1> BODY</h1>
        </div>
        <div class="spinner-border text-success"></div>

        <div>
          <h1>Footer</h1>
          
        </div>
        <p>{this.state.tags}</p>

        <img src={this.state.imageurl} alt="" />
        <button className="btn btn-secondary btn-sml">Increment</button>

      </React.Fragment>
    );
  }
}

export default Home;
