import "./hero.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { Fade, Flip, Roll } from "react-reveal";
import Pulse from "react-reveal/Pulse";
import videomo from "../../assets/logos/videomo.png";

const Hero = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_sk9rhx6",
      "template_o04ynd9",
      form.current,
      "QLjGTcd0mz8J-IC3R"
    );
    window.alert(
      "Thanks for contacting us, we will reply to your as soon as possible."
    );
  };

  return (
    <div className="hero">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-sm-12">
            <div className="hero-video-mo-img">
              <Fade left>
                <img src={videomo} alt="Video Mo" />
              </Fade>
            </div>
            <Fade top>
              <h1>Professional Video Editing Services For Your Business</h1>
            </Fade>
            <Fade left>
              <div className="hero-par">
                Video Mo's video editing service professionals <br /> deliver a
                lot more than post-production support.
              </div>
            </Fade>
            <Fade bottom>
              <Flip bottom>
                <a href="#portfolio" className="">

                  <button className="hero-portfolio">portfolio</button>
                </a>
              </Flip>
            </Fade>
          </div>
          {/* <Zoom right> */}
          <Roll right>
            <div className="hero-form col-lg-6 col-sm-12">
              <h2 className="text-center mb-3 text-capitalize">
                contact with us
              </h2>

              <form ref={form} onSubmit={sendEmail}>
                {/* * <!-- Name input --> */}
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Full Name"
                    id="form4Example1"
                    class="form-control hero-name"
                  />
                </div>

                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Work Email"
                    id="form4Example2"
                    class="form-control hero-email"
                  />
                </div>

                {/* <!-- Message input --> */}
                <div class="form-outline mb-4">
                  <textarea
                    name="message"
                    class="form-control hero-message"
                    id="form4Example3"
                    rows="4"
                    placeholder="Pleade Describe"
                  ></textarea>
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" value="Send" class="btn-block mb-4">
                  Send
                </button>
              </form>
            </div>
          </Roll>
          {/* </Zoom> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
