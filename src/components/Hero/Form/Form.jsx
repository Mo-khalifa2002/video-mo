import React from "react";
import "./form.scss";

const Form = () => {
  return (
    <div>
      <div className="hero-form col-lg-6 col-sm-12">
        <h2 className="text-center mb-3 text-capitalize">contact with us</h2>
        <form>
          {/* <!-- Name input --> */}
          <div class="form-outline mb-4">
            <input
              placeholder="Full Name"
              id="form4Example1"
              class="form-control hero-name"
            />
          </div>

          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <input
              type="email"
              placeholder="Work Email"
              id="form4Example2"
              class="form-control hero-email"
            />
          </div>

          {/* <!-- Message input --> */}
          <div class="form-outline mb-4">
            <textarea
              class="form-control hero-message"
              id="form4Example3"
              rows="4"
              placeholder="Pleade Describe"
            ></textarea>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" class="btn-block mb-4">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
