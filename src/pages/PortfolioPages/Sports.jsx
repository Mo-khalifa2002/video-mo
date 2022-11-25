import React from 'react'
import "./Portfolio.scss";
import Scroll from "../../components/Scroll/Scroll";
import { Link } from "react-router-dom";

const Sports = () => {
  return (
    <div className="portfolio-page">
      <Scroll />

      <h2 className="text-center">Sports Videos</h2>

      <Link
        to="/"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "2rem",
          textDecoration: "none",
        }}
      >
        <button className="back-to-home text-center">back to home</button>
      </Link>
      <div className="container">
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1zUdWivypkv-zI1dtZnD55Y6FLkevrQWL/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Caloos Amazing workout</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1DQ-eVcjpQOHlHpjkL3KVrI5i-Y_ZQOQf/preview"
            ></iframe>
            <p className="portfolio-par">The most humiluating...</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1NWE1bnnK2XAxe0CEyps2HH2rz1lal8Gs/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Rafael nadal</p>
          </div>
        </div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1KicwQsihzJ3NDCADRDEB6QEg9q_KRVxe/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">pato "football"</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1f-GmeaEpQs29mXQoa-vPtjstNBB0DXlp/preview"
            ></iframe>
            <p className="portfolio-par">Al Ahly vs zamalek</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1tAbWAL7fl52dOR1ErQF5xwQbVzoHF8Fj/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Nymar</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1OXERB_-0gIelP3KvILEN-pZnzvJCogXx/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Boxing</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1R-UoLU-pSmVA7PENmXVwMVnVClgUtkvK/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Boxing -1</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1i0fxz3nlLyXWOvbudZ0yuWGSulGrNsec/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Boxing -2</p>
          </div>
        </div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4"></div>
      </div>
    </div>
  );
}

export default Sports