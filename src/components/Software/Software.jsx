import React from "react";
import "./software.scss";
import pr from "../../assets/pr.png";
import one7 from "../../assets/17.png";
import ae from "../../assets/ae.png";
import fc from "../../assets/fc.png";
import video from "../../assets/video.png";
import { Link } from "react-router-dom";
import { Fade, Flip, Roll } from "react-reveal";

const Software = () => {
  return (
    <div className="software">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <Fade left>
            <div className="col-lg-5 col-sm-12">
              <p>
                We Use the Latest <br /> Video Editing Software
              </p>
            </div>
          </Fade>
          <div className="col-lg-4 col-sm-12 gap-3 d-flex justify-content-center align-items-center">
            <Fade bottom>
              <img src={pr} alt="adobe premiere pro" />
            </Fade>
            <Fade top>
              <img src={ae} alt="adobe after effect" />
            </Fade>
            <Fade bottom>
              <img src={one7} alt="17" />
            </Fade>
            <Fade top>
              <img src={fc} alt="final cut pro" />
            </Fade>
          </div>
          <Fade right>
            <div className="col-lg-4 soft-third-img col-sm-12">
              <img src={video} alt="video-image" />
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <div className="text-center mt-4">
            <a href="#portfolio">
              <button>portfolio</button>
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Software;
