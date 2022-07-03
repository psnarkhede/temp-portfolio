import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { FaLinkedin,FaGithub } from 'react-icons/fa';

class Header extends Component {
  render() {
    /*if (!this.props.data) return null;

   const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;*/

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap" style={{fontSize:"20px"}}>
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Skills
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1  style={{fontSize:"80px"}}>{"Piyush Narkhede"}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h2 style={{color:"crimson",fontSize:"40px"}}>{"Full Stack Web Developer"}</h2>
    </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <div style={{display:"flex", gap:"20px", margin:"auto", justifyContent:"center"}}>
                <a href={"https://www.linkedin.com/in/piyush-narkhede-75a07b162/"}>
                <FaLinkedin style={{color:"#0a66c2", fontSize:"70px"}}/>
                </a>
                <a href={"https://github.com/psnarkhede"} >
                <FaGithub style={{color:"black", fontSize:"70px"}}/>
                </a>
              </div>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
