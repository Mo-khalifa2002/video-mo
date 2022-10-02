import React from "react";
import "./Portfolio.scss";
import Scroll from "../../components/Scroll/Scroll";
import { Link } from "react-router-dom";

const MovieRecap = () => {
  return (
    <div className="portfolio-page">
      <Scroll />

      <h2 className="text-center">Movie Recaps & Short Films</h2>

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
              src="https://drive.google.com/file/d/1iwi2h3WSQsxI6V_aZt4XABLd4WA2_J5n/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">baby drvier</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1NHbl_8gvM7YB5UBdecGzDP_gS_U9f15C/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">the wolf of...</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1TY9IHdIHO16A-V1UFMHTNEU2WGdG1mRJ/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Paris</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1Tr3LV1stxsfh2VE4yuWA5-l0mi4fL9x5/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">why do we... "Arabic"</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              src="https://www.youtube.com/embed/p4QwF6Wtcw8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="portfolio-iframe"
            ></iframe>
            <p className="portfolio-par">movie conclusion</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1J3v-cAW7AM1h2SjDpW8FvR1qLc82MpO7/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">You have to "short film"</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/15thgDPWkUQasbp6QFqy8A5QVkkouumS1/preview"
            ></iframe>
            <p className="portfolio-par">squid game top...</p>
          </div>
        </div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4"></div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4"></div>
      </div>
    </div>
  );
};

export default MovieRecap;
