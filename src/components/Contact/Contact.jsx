import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";
import { Fade, Flip, Roll, Zoom } from "react-reveal";

const Contact = () => {
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
    <div className="contact">
      <div className="container">
        <Fade top>
          <div className="contact-heading">
            Schedule a time to chat with us to learn about how we can help you
            monetize your video production business.
          </div>
        </Fade>

        <div className="row d-flex justify-content-center">
          {/* <Zoom left> */}
          <Roll left>
            <div className="contact-info col-lg-5 col-sm-12">
              <h1 className="text-capitalize">contact us</h1>
              <div className="d-flex justify-content-start">
                <div className="contact-icon">
                  <AiTwotonePhone className="contact-icon-not-wrapper" />
                </div>
                <div className="d-column">
                  <div className="contact-des">Phone</div>
                  <div className="contact-desreption">+201556724033</div>
                </div>{" "}
              </div>
              <a
                target="_blank"
                href="https://wa.me/01556724033"
                className="cardd text-white col-sm-12 rounded p-2 mb-3 col-md-12"
              >
                <div className="d-flex justify-content-start">
                  <div className="contact-icon">
                    <BsFillChatDotsFill className="contact-icon-not-wrapper" />
                  </div>
                  <div className="contact-des">WhatsApp</div>
                </div>
              </a>
              <div className="d-flex justify-content-start">
                <div className="contact-icon">
                  <HiOutlineMail className="contact-icon-not-wrapper" />
                </div>
                <div className="d-column">
                  <div className="contact-des">Email</div>
                  <div className="contact-desreption">
                    videomo2002@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </Roll>

          <Roll right>
            <div className="contact-form col-lg-7 col-sm-12">
              <form ref={form} onSubmit={sendEmail}>
                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline">
                      <input
                        type="text"
                        name="user_name"
                        id="form3Example1"
                        class="form-control hero-name"
                        placeholder="Your First Name"
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="form3Example2"
                        class="form-control hero-name"
                        placeholder="Your Last Name"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-4">
                  {/* <!-- Email input --> */}
                  <div class="form-outline col">
                    <input
                      type="email"
                      name="user_email"
                      id="form3Example3"
                      class="form-control hero-email"
                      placeholder="Work Email"
                    />
                  </div>
                  <div class="form-outline col">
                    <input
                      type="text"
                      id="form3Example3"
                      class="form-control hero-email"
                      placeholder="Work Phone Number"
                    />
                  </div>
                </div>

                {/* <!-- Message input --> */}

                <div class="form-outline mb-4">
                  <textarea
                    name="message"
                    class="form-control hero-message"
                    id="form6Example7"
                    rows="4"
                    placeholder="Please Describe"
                  ></textarea>
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" class="btn-block mb-4">
                  Contact Us
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

export default Contact;
