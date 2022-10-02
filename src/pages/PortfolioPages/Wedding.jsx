import React from "react";
import "./Portfolio.scss";
import Scroll from "../../components/Scroll/Scroll";
import { Link } from "react-router-dom";

const Wedding = () => {
  return (
    <div className="portfolio-page">
      <Scroll />

      <h2 className="text-center">Wedding Videos</h2>

      <Link to="/" style={{    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2rem", textDecoration: "none"}}>
        <button className="back-to-home text-center">back to home</button>
      </Link>

      <div className="container">
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1szK9DNsJpiPp97UpFzE-NxiiUtI-htWU/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">wedding sammary</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1DQEycb1PUzST6Oeaqh24hPNeH15oTu9o/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">wedding</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1imS3hVB5LsYtxRpXWJQujOcQ34mi0UaJ/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">wedding with speaches</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1qa9TdR00JfmsKMJZ187N078SFC_6CssQ/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">wedding with voice over</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1z7kGI4V9FwvRV3RY06jeqgiHAtagEaAh/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">wedding -1</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1_8IctBo2O54tyzVG4Ag5FtBtSdW5-zpK/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">I love you for...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wedding;
