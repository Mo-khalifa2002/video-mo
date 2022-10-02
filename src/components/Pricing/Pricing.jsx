import React from "react";
import "./pricing.scss";
import { Link } from "react-router-dom";
import { Fade, Flip, Roll } from "react-reveal";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="container text-center">
        <Fade top>
          <p>A highly experienced artist team</p>
        </Fade>

        <Fade bottom>
          <h1>Video Mo Pricing</h1>
        </Fade>
        <Fade top>
          <h6 className="fs-5">
            Our pricing structure is based on a careful analysis of what our
            customers need in terms of professional <br /> services vs. low
            budgets. That's why we have decided to strike a chord with our
            customers by giving them the best at
            <br /> rates that you can't get anywhere else.
          </h6>
        </Fade>
        <Flip bottom>
          <Fade bottom>
            <Link to="pricing">
              <button>Pricing Details</button>
            </Link>
          </Fade>
        </Flip>
      </div>
    </div>
  );
};

export default Pricing;
