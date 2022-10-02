import React from "react";
import "./Portfolio.scss";
import Scroll from "../../components/Scroll/Scroll";
import { Link } from "react-router-dom";

const Food = () => {
  return (
    <div className="portfolio-page">
      <Scroll />

      <h2 className="text-center">Food & Restaurant Videos</h2>

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
              src="https://drive.google.com/file/d/1gucnmEgf0Q3QAJYqQP4ap2N5f1KUpTVc/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">food promo -2</p>
          </div>

         
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1d7WLbS_ZpVCbJqGjNrpiDmGFo8gFvTEx/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">resturant's food promo</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1RlLy9Ak3cVG8hlV7PSghk-lth4mY3d2Z/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">cooking promo</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1nqpUQHk7VIfI-bwRvOmrcWhCThvwpGE4/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Food recipe promo</p>
          </div>
        
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1-9CxIXghh1nSscq9cXMnwpbASNI5OLMq/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Food Promo</p>
          </div>
        </div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4"></div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4"></div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4"></div>
      </div>
    </div>
  );
};

export default Food;
