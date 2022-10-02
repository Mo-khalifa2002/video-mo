import React from "react";
import "./Portfolio.scss";
import Scroll from "../../components/Scroll/Scroll";
import { Link } from "react-router-dom";

const Youtube = () => {
  return (
    <div className="portfolio-page">
      <Scroll />

      <h2 className="text-center">YouTube Video Editing</h2>

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
              src="https://drive.google.com/file/d/1L8dfFiyH09h-2yyH6yAqZvwutZ0d4VhA/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">make money with coding</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1-E2RPErjZM2fALbx5Fvrgh3cj6vKXcEq/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">lets get into...</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1PQAABpSulZo-zVEp1sNGz8y8yb2pD28c/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">kala pani "indian"</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1iAF0iov1ys3qiuBTUT7-6mM9YWk-EbDe/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Coaches "youtube edit"</p>
          </div>

          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1aPw8wkh07g9iZWn5RxhD5T3r1cnFzEnP/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">best car's products</p>
          </div>

          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1CCSvbim3YnNMkS1RhEYcS4-6cNjXTTTt/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Exams "Dahheeh style"</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1PR9QnVE5cfVbWgWAFhg_JQ2iC3fsG0rS/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">zedny "speaking"</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/147QidHDb3-g4Rz_opH27klOWDyGyDlRS/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">best products for cars</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
src="https://drive.google.com/file/d/1tAbWAL7fl52dOR1ErQF5xwQbVzoHF8Fj/preview"              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Nymar</p>
          </div>
        </div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4"></div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4"></div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4"></div>
      </div>
    </div>
  );
};

export default Youtube;
