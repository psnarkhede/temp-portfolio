import React, { Component } from "react";
import Fade from "react-reveal";
import { FaLinkedin,FaGithub } from 'react-icons/fa';

class Footer extends Component {
  render() {
    /*if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });*/

    return (
      <footer>
        <div className="row">
          <Fade bottom>
          <div style={{display:"flex", gap:"20px", margin:"auto", justifyContent:"center"}}>
                <a href={"https://www.linkedin.com/in/piyush-narkhede-75a07b162/"}>
                <FaLinkedin style={{color:"#0a66c2", fontSize:"70px"}}/>
                </a>
                <a href={"https://github.com/psnarkhede"} >
                <FaGithub style={{color:"white", fontSize:"70px"}}/>
                </a>
              </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
