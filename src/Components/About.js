import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    /*if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;
*/
    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                style={{width:"200px", height:"200px", borderRadius:"50%"}}
                src={"https://avatars.githubusercontent.com/u/101566060?v=4"}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2 style={{fontSize:"24px"}}>About Me</h2>

              <p style={{fontSize:"18px"}}>{"An aspiring full-stack web developer, passionate about programming and always ready to learn new and evolving technologies. Always keen to utilize my skills to optimize the quality of solutions and contribute my knowledge to problem-solving in an effective manner."}</p>
              <div className="row">
                {/*<div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>*/}
                <div className="columns download">
                  <p>
                    <a href={"https://drive.google.com/file/d/1kvLfVq5r-ufhalZ2WaHOCTetIOGFGMpz/view?usp=sharing"} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
