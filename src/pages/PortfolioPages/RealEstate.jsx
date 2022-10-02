import React from 'react'
import "./Portfolio.scss";
import Scroll from "../../components/Scroll/Scroll";
import { Link } from "react-router-dom";

const RealEstate = () => {
  return (
    <div className="portfolio-page">
      <Scroll />

      <h2 className="text-center">Real Estate Videos</h2>

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
              src="https://www.youtube.com/embed/PCCoVZVZkrQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="portfolio-iframe"
            ></iframe>
            <p className="portfolio-par">real estate</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1epPbTVYl96TFQfyug_2JprVEp6M4ehId/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Real state ad</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1lqGtqQwRCMK8a8Wm3n4RIjOm_qdTck5Z/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">sasha szymon</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
src="https://drive.google.com/file/d/1AiyNFohuEquTnq12ZjiOSIzH8GkumKmP/preview"              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">grand pointe</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RealEstate