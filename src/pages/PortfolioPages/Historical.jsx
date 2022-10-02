import React from "react";
import "./Portfolio.scss";
import Scroll from "../../components/Scroll/Scroll";
import { Link } from "react-router-dom";

const Historical = () => {
  return (
    <div className="portfolio-page">
      <Scroll />

      <h2 className="text-center">Historical Video Editing</h2>

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
              src="https://drive.google.com/file/d/1WqpJvuStHrbzQXNgckEsK11SNGcywRnL/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Nuclear monsters clash</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1cQnZ52_NRdmTmp9IS3VTlRllhwQxV916/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">The legend of the east</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1nd8CDTj7wAcbS4DPT-sPX5KO77H4hoFU/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">london bridge fall</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1GppsiY4qPlZiX1AxMphWzJlq4IEsgqt6/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">luxembourg</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1VS1ZAjeBxNYpGPeiaYTcd7gwZSekQy1d/preview"
            ></iframe>
            <p className="portfolio-par">The Honza</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1VzwevUkihYtF94BWgJ-qjGr73gDzaM9-/preview"
            ></iframe>
            <p className="portfolio-par">historical promo</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1_ZocT0myKUUJB9sqf3cag77GGzFVZKpt/preview"
            ></iframe>
            <p className="portfolio-par">Al Namrood</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1CZvcrhHMxbQSSCuSMkDunBuQk7fuZVHP/preview"
            ></iframe>
            <p className="portfolio-par">the first battle...</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
src="https://drive.google.com/file/d/1fTmJBLcMrjPcLH7sr5Q1ULlQCyKgSILb/preview"            ></iframe>
            <p className="portfolio-par">one day...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historical;
