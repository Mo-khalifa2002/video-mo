import React from "react";
import "./Portfolio.scss";
import Scroll from "../../components/Scroll/Scroll";
import { Link } from "react-router-dom";

const Vlogs = () => {
  return (
    <div className="portfolio-page">
      <Scroll />

      <h2 className="text-center">Vlog Videos</h2>

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
              src="https://drive.google.com/file/d/118v6zvoHs_WNcm9EGP5Ux8uFZhUmN0jH/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">JDI-Vape advertisement</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1PA2YthJK2Gx5qfB_bWEBfKqIZhAw0tOX/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">funny video with graphic</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1ZcFN26JSYACW_L_FAaAJjjj8uQUZXBMY/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">reaction video</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1nuVN09U1vsjomUJTt1v1QhUVRPQD_dlb/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">this magic word ...</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1P9OjGKnUEFjNY-ENj51PRP3h1pfKIONw/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">most viewed tiktoks ...</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1h6Rrn-JkdNOa26hMIOefTqvo2NDdr1oT/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">money and passive income</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1NGFn9BUAW93eUbs909hyhCIiCsG0OomU/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">new day ...</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1srkbujJsQLxX_JLHxrl7WT4G0HD0txOy/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">girls reactions ...</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1ScuMg4BmefCR9GaDts3HLL_S6Eu_glJX/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">welcome</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1nOfDd8Ys-nJdNeZx0kc7yNH-hB6bacIN/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">impossible odds</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1E2Skd1I-TfJVwYfs6YykFtd9ryIADUm7/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Yalla taste</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1LOaZQc1_ixOi-lj7TxcURQ5qA3jWA2Nf/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">lahore</p>
          </div>
        </div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1Edg0fS9fUB9wmo8FlhpD7U81eNM16tvM/preview"
            ></iframe>
            <p className="portfolio-par">ramadan... "arabic street ask"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vlogs;
