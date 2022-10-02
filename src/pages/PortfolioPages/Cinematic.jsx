import React from 'react'
import "./Portfolio.scss";
import Scroll from "../../components/Scroll/Scroll";
import { Link } from "react-router-dom";

const Cinematic = () => {
  return (
    <div className="portfolio-page">
      <Scroll />

      <h2 className="text-center">Cinematic Videos</h2>

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
              src="https://drive.google.com/file/d/1LOaZQc1_ixOi-lj7TxcURQ5qA3jWA2Nf/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">lahore</p>
          </div>

          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              src="https://www.youtube.com/embed/W0PRxKJyyM8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="portfolio-iframe"
            ></iframe>
            <p className="portfolio-par">Nature cinematic</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              src="https://www.youtube.com/embed/q7gjaczQigo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="portfolio-iframe"
            ></iframe>
            <p className="portfolio-par">Tourism Ireland</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              src="https://www.youtube.com/embed/q7gjaczQigo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="portfolio-iframe"
            ></iframe>
            <p className="portfolio-par">Tourism Ireland</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
src="https://drive.google.com/file/d/15nYtfV7AEqrJwsNWR6yRHZ78H2LVLtUm/preview"              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">luxury life</p>
          </div>

        </div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4"></div>
      </div>
    </div>
  );
}

export default Cinematic