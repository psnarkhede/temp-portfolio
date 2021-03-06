import React, { Component } from "react";
import { Slide } from "react-reveal";

class Contact extends Component {
  render() {
    /* if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;
*/
    return (
      <section id="contact">
        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              {/*<form action="" method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>*/}
            </div>
          </Slide>

          <Slide left duration={1000}>
            <h6
              style={{
                fontSize: "40px",
                color: "white",
                border: "1px solid #191919",
                textAlign: "center",
              }}
            >
              Contact
            </h6>
          </Slide>

          <Slide right duration={1000}>
            <div style={{ textAlign: "center",marginTop:"50px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                }}
              >
                <h4 style={{ fontSize: "20px" }}>Email:</h4>
                <p
                  style={{
                    marginTop: "20px",
                    fontSize: "18px",
                    color: "silver",
                  }}
                >
                  piyushnarkhede02@gmail.com
                </p>
              </div>
              <div
                style={{
                  marginTop: "-20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                }}
              >
                <h4 style={{ fontSize: "20px" }}>Mobile:</h4>
                <p
                  style={{
                    marginTop: "24px",
                    fontSize: "18px",
                    color: "silver",
                  }}
                >
                  9657881242
                </p>
              </div>
              <div
                style={{
                  marginTop: "-20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                }}
              >
                <h4 style={{ fontSize: "20px" }}>Address:</h4>
                <p
                  style={{
                    marginTop: "24px",
                    fontSize: "18px",
                    color: "silver",
                  }}
                >
                  Digras, Maharashtra
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
