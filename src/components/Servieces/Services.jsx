import React from "react";
import "./services.scss";
import { Link } from "react-router-dom";
import { Fade, Flip, Roll } from "react-reveal";

const Services = () => {
  return (
    <div id="portfolio" className="services">
      <div className="container text-center text-capitalize">
        <h1>Portfolio</h1>

        <Fade top>
          <div className="row d-flex justify-content-center align-items-center gap-4 mb-2">
            <Link to="cash-cow" style={{   textDecoration: "none", cursor: "pointer" }}>
              <div className="col-md">Cash Cow</div>
            </Link>

            <Link to="ads" style={{   textDecoration: "none", cursor: "pointer" }}>
            <div className="col-md">Ads and Promos</div>
            </Link>

            <Link to="youtube" style={{   textDecoration: "none", cursor: "pointer" }}>
            <div className="col-md">YouTube Editing "Speaking"</div>
            </Link>

            <Link to="wedding" style={{   textDecoration: "none", cursor: "pointer" }}>
            <div className="col-md">Wedding videos</div>
            </Link>
          </div>
        </Fade>
        <Fade bottom>
          <div className="row d-flex justify-content-center align-items-center gap-4 mb-2">
            <Link to="movie-recaps" style={{   textDecoration: "none", cursor: "pointer" }}>
            <div className="col-md">Movie Recaps</div>
            </Link>

            <Link to="vlogs" style={{   textDecoration: "none", cursor: "pointer" }}>
            <div className="col-md">Vlogs</div>
            </Link>

            <Link to="motion" style={{   textDecoration: "none", cursor: "pointer" }}>
            <div className="col-md">Motion Graphic</div>
            </Link>

            <Link to="historical" style={{   textDecoration: "none", cursor: "pointer" }}>
            <div className="col-md">Historical</div>
            </Link>
          </div>
        </Fade>
        <Fade top>
          <div className="row d-flex justify-content-center align-items-center gap-4 mb-2">
            <Link to="tiktoks" style={{   textDecoration: "none", cursor: "pointer" }}>
            <div className="col-md">TikToks / Reels</div>
            </Link>
            <Link to="sports" style={{   textDecoration: "none", cursor: "pointer" }}>
            <div className="col-md">Sports</div>
            </Link>
            <Link to="food" style={{   textDecoration: "none", cursor: "pointer" }}>
            <div className="col-md">Food & restaurants</div>
            </Link>
            <Link to="cinematic" style={{   textDecoration: "none", cursor: "pointer" }}>
            <div className="col-md">Cinematic</div>
            </Link>
          </div>
        </Fade>
        <Fade bottom>
          <div className="row d-flex justify-content-center align-items-center gap-4 mb-2">
            <Link to="makeup" style={{   textDecoration: "none", cursor: "pointer" }}>
            <div className="col-md">Make Up</div>
            </Link>
            <Link to="podcast" style={{   textDecoration: "none", cursor: "pointer" }}>
            <div className="col-md">Podcast</div>
            </Link>
            <Link to="game-play" style={{   textDecoration: "none", cursor: "pointer" }}>
            <div className="col-md">Game play</div>
            </Link>
            <Link to="real-estate" style={{   textDecoration: "none", cursor: "pointer" }}>
            <div className="col-md">Real Estate</div>
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Services;
