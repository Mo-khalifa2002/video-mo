import React from 'react'
import "./Portfolio.scss";
import Scroll from "../../components/Scroll/Scroll";
import { Link } from "react-router-dom";

const GamePlay = () => {
  return (
<div className="portfolio-page">
      <Scroll />

      <h2 className="text-center">Games Videos</h2>

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
              src="https://www.youtube.com/embed/nyKqObmb2GY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="portfolio-iframe"
            ></iframe>
            <p className="portfolio-par">minecraft</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1WsXG5L0qpAdcH52xfBFf7tD2Ko4v1Enx/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">GTA5 "gaming video"</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/12rwlocHoJXz8DfoMLflcU8AnFdZ1c3o2/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Fifa game play</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">  
                  <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1b9h0il5fifrOFG9aD81dwNC6PDYStPn2/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">FIFA "gaming video"</p>
          </div>
        </div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">  
        </div>
        </div>
        </div>
        )
}

export default GamePlay