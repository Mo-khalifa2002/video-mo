import React from "react";
import moduleName from "./frank.scss";
import { BsDot } from "react-icons/bs";

const Frank = () => {
  return (
    <div className="frank">
      <div className="container">
        <div className="row">
          <h2 className="col-md-6 col-sm-12">
            Let's be frank, video editing takes a lot of time and not everybody
            can do it the right way
          </h2>
          <div className="frank-right col-md-6 col-sm-12">
            <p className="first-par mb-2">
              No matter if you are an industry disruptor, mid-tier brand,
              fortune 500 Company, or an average Joe (or Jane)….
            </p>
            <p className="second-par mb-1 mt-3">Send us any kind of raw footage:</p>

            <div className="third-par-list mb-3">
              <div className="d-flex align-items-center">
                <div className="third-par-list-icon">
                  <BsDot />
                </div>
                <h6 className="third-par-list-des ml-1">
                  Corporate footage about your brand or service
                </h6>
              </div>
              <div className="d-flex align-items-center">
                <div className="third-par-list-icon">
                  <BsDot />
                </div>
                <h6 className="third-par-list-des ml-1">
                  Touching moments of your children and family
                </h6>
              </div>
              <div className="d-flex align-items-center">
                <div className="third-par-list-icon">
                  <BsDot />
                </div>
                <h6 className="third-par-list-des ml-1">
                  Adventure clips recorded with an action camera
                </h6>
              </div>
            </div>

            <p className="mb-1">No matter what industry you’re in…</p>
            <p className="mb-1">
              No matter what type of video you are looking to get done…
            </p>
            <p className="mb-1">
              You need someone who knows their business if you want your video
              to look good.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frank;
