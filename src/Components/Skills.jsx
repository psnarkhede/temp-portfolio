import React from "react";
import Slide from "react-reveal";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithubSquare,
} from "react-icons/fa";
import {
  SiChakraui,
  SiJavascript,
  SiRedux,
} from "react-icons/si";

/*class Skills extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }*/

/*if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });*/

const Skills = () => {
  return (
    <section id="resume">
      {/*<Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>*/}

      <Slide left duration={1300}>
        <h4
          style={{
            fontSize: "40px",
            textAlign: "center",
            color: "black",
            fontWeight: "bolder",
          }}
        >
          Skills
        </h4>
      </Slide>

      <Slide right duration={1300}>
        <div
          style={{
            width:"80%",
            margin:"auto",
            display: "grid",
            gridTemplateColumns:"repeat(7,1fr)",
            justifyContent: "center",
            gap:"auto",
            marginTop:"50px"
          }}
        >
          <div style={{  textAlign: "center" }}>
            <FaHtml5 style={{ fontSize: "70px", color:"#dd4b25" }} />
            <h6 style={{ fontSize: "18px" }}>HTML</h6>
          </div>

          <div style={{textAlign: "center" }}>
            <FaCss3Alt style={{ fontSize: "70px", color:"#264de4" }} />
            <h6 style={{ fontSize: "18px" }}>CSS</h6>
          </div>

          <div style={{textAlign: "center" }}>
            <SiJavascript style={{ fontSize: "70px", color:"#efd81d" }} />
            <h6 style={{ fontSize: "18px" }}>JavaScript</h6>
          </div>

          <div style={{textAlign: "center" }}>
            <SiChakraui style={{ fontSize: "70px", color:"#4dbbb6" }} />
            <h6 style={{ fontSize: "18px" }}>Chakra-UI</h6>
          </div>

          <div style={{textAlign: "center" }}>
            <FaReact style={{ fontSize: "70px", color:"#00d1f7" }} />
            <h6 style={{ fontSize: "18px" }}>React</h6>
          </div>

          <div style={{textAlign: "center" }}>
            <SiRedux style={{ fontSize: "70px", color:"#7248b6" }} />
            <h6 style={{ fontSize: "18px" }}>Redux</h6>
          </div>

          <div style={{textAlign: "center" }}>
            <FaGithubSquare style={{ fontSize: "70px", color:"black" }} />
            <h6 style={{ fontSize: "18px" }}>GitHub</h6>
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default Skills;
