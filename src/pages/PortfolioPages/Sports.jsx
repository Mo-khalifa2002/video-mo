import React from 'react'
import "./Portfolio.scss";
import Scroll from "../../components/Scroll/Scroll";
import { Link } from "react-router-dom";

const Sports = () => {
  return (
    <div className="portfolio-page">
      <Scroll />

      <h2 className="text-center">Sports Videos</h2>

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
              src="https://drive.google.com/file/d/1zUdWivypkv-zI1dtZnD55Y6FLkevrQWL/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Caloos Amazing workout</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1bFsF7xBXwn_Nrk92ZnyB1vm9ZX-9bCjp/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Boxing fight " short video "</p>
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
      </div>
    </div>
  );
}

export default Sports