import React, { Component } from "react";
//import Zmage from "react-zmage";
import Fade from "react-reveal";
import { FaGithub, FaReact, FaCss3Alt, FaHtml5,FaExternalLinkAlt } from "react-icons/fa";
import { SiRedux, SiJavascript, SiChakraui } from "react-icons/si";
import modesens from "../images/modesens.jpeg";
import outnet from "../images/outnet.jpeg";

//let id = 0;
class Projects extends Component {
  render() {
    /*if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });*/

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <h4
              style={{ fontSize: "40px",textAlign:"center", color: "black", fontWeight: "bolder" }}
            >
              Projects
            </h4>
            </div>
            </Fade>
            <Fade right duration={1000} distance="40px">
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"20px",margin:"auto",marginTop:"50px",width:"80%"}}>
            <div
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                padding: "10px"
              }}
            >
              <img style={{ width: "100%", height: "250px" }} src={modesens} alt="" />

              <div style={{ padding: "20px" }}>

                <div style={{marginTop:"-10px",height:"100px"}}>
                <h6 style={{fontSize:"20px"}}>ModeSens Clone</h6>
                <p>
                  It is a digital shopping assistant for smart and informed
                  shopping.
                </p>
                </div>

                <div style={{ height:"150px"}}>
                <h6 style={{fontSize:"20px"}}>Contribution:-</h6>
                <p>
                  Built product page, built recently viewed and alert page and
                  also built functionality to add and remove products from
                  recently viewed and alert page.
                </p>
                </div>

                <div style={{height:"130px"}}>
                <h6 style={{fontSize:"20px"}}>Tech Stack Used:-</h6>

                <div style={{ display: "flex", gap: "30px",marginTop:"15px" }}>
                  <div style={{ textAlign: "center" }}>
                    <FaReact style={{ fontSize: "30px" }} />
                    <p style={{ fontSize: "14px" }}>React</p>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <SiRedux style={{ fontSize: "30px" }} />
                    <p style={{ fontSize: "14px" }}>Redux</p>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <SiJavascript style={{ fontSize: "30px" }} />
                    <p style={{ fontSize: "14px" }}>JavaScript</p>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <SiChakraui style={{ fontSize: "30px" }} />
                    <p style={{ fontSize: "14px" }}>Chakra-ui</p>
                  </div>
                </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    height:"80px",
                    alignItems:"center",
                    gap:"20px",
                  }}
                >
                  <a href={"https://modesensteamclone.netlify.app"}>
                    <button>Live Link  <span><FaExternalLinkAlt/></span></button>
                  </a>
                  <a href={"https://github.com/psnarkhede/Modesens"}>
                      <FaGithub
                        style={{
                          color: "black",
                          width: "60",
                          height: "60",
                          marginTop:"-10px"
                        }}
                      />
                  </a>
                </div>
              </div>
            </div>

            {/*2 */}

            <div
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                padding: "10px"
              }}
            >
              <img style={{ width: "100%", height: "250px" }} src={outnet} alt=""/>

              <div style={{ padding: "20px" }}>

                <div style={{marginTop:"-10px",height:"100px"}}>
                <h6 style={{fontSize:"20px"}}>THE OUTNET Clone</h6>
                <p>
                This website is luxury discount shopping website.
                </p>
                </div>
                <div style={{height:"150px"}}>
                <h6 style={{fontSize:"20px"}}>Contribution:-</h6>
                <p>
                Built checkout page and built functionality to edit the user details, payment
method and delivery address. Also created review section and timer for OTP.
                </p>
                </div>

                <div style={{height:"130px"}}>
                <h6 style={{fontSize:"20px"}}>Tech Stack Used:-</h6>

                <div style={{ display: "flex", gap: "30px",marginTop:"15px" }}>
                  <div style={{ textAlign: "center" }}>
                    <FaHtml5 style={{ fontSize: "30px" }} />
                    <p style={{ fontSize: "14px" }}>HTML</p>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <FaCss3Alt style={{ fontSize: "30px" }} />
                    <p style={{ fontSize: "14px" }}>CSS</p>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <SiJavascript style={{ fontSize: "30px" }} />
                    <p style={{ fontSize: "14px" }}>JavaScript</p>
                  </div>

                </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems:"center",
                    gap:"20px",
                    height:"80px",
                  }}
                >
                  <a href={"https://theoutne-e7f2b5.netlify.app/"}>
                    <button>Live Link  <span><FaExternalLinkAlt/></span></button>
                  </a>
                  <a href={"https://github.com/psnarkhede/outnetclone"}>
                      <FaGithub
                        style={{
                          color: "black",
                          width: "60",
                          height: "60",
                          marginTop:"-10px"
                        }}
                      />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Projects;
