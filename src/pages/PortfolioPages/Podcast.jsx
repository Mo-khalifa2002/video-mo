import React from 'react'
import "./Portfolio.scss";
import Scroll from "../../components/Scroll/Scroll";
import { Link } from "react-router-dom";

const Podcast = () => {
  return (
<div className="portfolio-page">
      <Scroll />

      <h2 className="text-center">Make Up Videos</h2>

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
              src="https://drive.google.com/file/d/1KYKQ3nAyWiyzSTfyJFgI4z-Q3TGGPTZW/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Podcast</p>
          </div>
        </div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">   
        </div>
        </div>
        </div>
        )
}

export default Podcast