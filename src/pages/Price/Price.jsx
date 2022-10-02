import React from "react";
import Pricing from "../../components/Pricing/Pricing";
import "./price.scss";
import { FiCheckSquare } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { Fade, Flip, Roll } from "react-reveal";
import { Link } from "react-router-dom";

const Price = () => {
  return (
    <div className="price">
      <div className="first-price text-center">
        <Fade top>
          <p>A highly experienced artist team</p>
        </Fade>
        <Fade bottom>
          <h1>Video Mo Pricing</h1>
        </Fade>

        <Fade top>
          <h6>
            Our pricing structure is based on a careful analysis of what our
            customers need in terms of professional <br /> services vs. low
            budgets. That's why we have decided to strike a chord with our
            customers by giving them the best at
            <br /> rates that you can't get anywhere else.
          </h6>
        </Fade>
        <Fade bottom>
          <div className="container">
            <div className="second-price text-center">
              Since every customer is unique, we offer many pricing options. Our
              precise pricing structure depends on the scale of your project,
              the number of individuals required to work on that project and the
              level of expertise required to complete it.
            </div>
          </div>
        </Fade>
        <Fade top>
          <Link to="/">
            <button className="price-home-btn">Home</button>
          </Link>
        </Fade>
      </div>
      <Fade bottom>
        <div className="contact-heading">
          Schedule a time to chat with us to learn about how we can help you and
          put the price depending on the following:
        </div>
      </Fade>

      <div className="third-price">
        <div className="container">
          <div className="row mt-4">
            <Fade top>
              <div className="col-md-6 mb-4 col-sm-12">
                <div className="third-price-card">
                  <div className="p-3">
                    <h4 className="text-capitalize">video editing</h4>
                    <div className="d-flex">
                      <div className="third-price-icon">
                        <FiCheckSquare className="price-icon" />
                      </div>
                      <div className="third-price-desc">
                        Provide a personalized experience; bringing you the most
                        relevant content when you need it.
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="third-price-icon">
                        <FiCheckSquare className="price-icon" />
                      </div>
                      <div className="third-price-desc">
                        Identify areas of the website that can be improved.
                      </div>
                    </div>
                    <div className="thrird-price-final-par">
                      Both these options will be influenced by the Duration of
                      the Video after Editing. For example, a 3-hour video can
                      be edited down to a 3-minute video or cut down to a
                      30-second video also.
                    </div>

                    <div className="medium mb-3 mt-4">
                      <span>
                        <FiCheck className="med-icon" />
                      </span>
                      <b>Medium</b> <br /> Basic editing + Video Transition
                      Effects / Fine Cut / Audio Normalizing / DVD Authoring
                    </div>
                    <div className="advanced">
                      <span>
                        <FiCheck className="med-icon" />
                      </span>
                      <b>Advanced</b> <br /> Medium editing features + Video
                      Enhancement /Audio Enhancement / Menu with customized
                      chapters / Blu Ray Authoring Authoring
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="col-md-6 mb-4 col-sm-12">
                <div className="third-price-card">
                  <div className="p-3">
                    <h4 className="text-capitalize">Storyboarding</h4>
                    <div className="d-flex">
                      {/* <div className="third-price-icon">
                      <FiCheckSquare className="price-icon" />
                    </div> */}
                      <div className="the-pricing-varies">
                        The pricing varies based on the following factors:
                      </div>
                    </div>

                    <div className="third-list">
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">
                          Number of Characters, Details in the Characters
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">
                          Number of Frames, Panels, and Styles
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">
                          Details in the Backgrounds and Objects used
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">
                          Details in the Backgrounds and Objects used
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">
                          Inking and coloring
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">
                          Character creation, Live Actions, Cartoons, etc.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          {/* the second row */}
          <div className="row mt-4">
            <Fade top>
              <div className="col-md-6 mb-4 col-sm-12">
                <div className="third-price-card">
                  <div className="p-3">
                    <h4 className="text-capitalize">Audio Editing </h4>
                    <div className="depends-on">Depends on the following:</div>
                    <div className="third-list">
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">
                          Number of microphones used
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">
                          Number of Participants in the Audio
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">
                          Desired Audio Quality
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="col-md-6 mb-4 col-sm-12">
                <div className="third-price-card">
                  <div className="p-3">
                    <h4 className="text-capitalize">2D Animation</h4>
                    <div className="depends-on">Depends on the following:</div>
                    <div className="third-list">
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">
                          Length of animation
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">Sound effects</div>
                      </div>
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">
                          Number of concepts
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">
                          High Definition (HD)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          {/* the third row */}
          <div className="row mt-4">
            <Fade top>
              <div className="col-md-6 mb-4 col-sm-12">
                <div className="third-price-card">
                  <div className="p-3">
                    <h4 className="text-capitalize">3D Animation</h4>
                    <div className="depends-on">Depends on the following:</div>
                    <div className="third-list">
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">
                          Length of animation
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">Sound effects</div>
                      </div>
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">
                          Number of concepts
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">
                          3D character modeling
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="third-price-icon">
                          <FiCheckSquare className="price-icon" />
                        </div>
                        <div className="third-price-desc">
                          High Definition (HD)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
