import React from "react";
import "./Portfolio.scss";
import Scroll from "../../components/Scroll/Scroll";
import { Link } from "react-router-dom";

const Tiktoks = () => {
  return (
    <div className="portfolio-page">
      <Scroll />

      <h2 className="text-center">TikToks & Reels</h2>

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
              src="https://drive.google.com/file/d/19jVkcBvq0qLzrNxB1UfV8QWMbSdAlPmI/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Dr Strange...</p>
          </div>

          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/130xYmk5nGwHE_rmPN0CC7u7RxvzPuYvT/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">life is too...</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/16jbqpVX2iKVqZXVd2xGfwXlAoNpbMgIK/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">tiktok subtitles -3</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/18XBu_ill7KwxuvEMX2l2a5YWFMZ9_tNm/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">cooking "shorts"</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1q3aThynnqwKkPQbr5bbVUUbtDM822Ye3/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">spicey "food promo"</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1QFRcHNEOQ_a-aVlk38bnt20XMiI4ZuMM/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">fast coocking</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1bMq3B4SBJeCQR4JmLjs_67gHuSL4V5eQ/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">rev.com</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1MIzc9d5jnNWLppUndPxtjnk0W0KVJ6d-/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">this feeling "shorts"</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1XL1OtT9eRSfS3o7mDlLnFzvM68zh3jnk/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Do you like recieving it</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1fVVFLz2pnkGfXEtE_k0c8YPLUdopQDrF/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Showing the house "shorts"</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1pa8ujHaizAEzzLQCZWcH3V2Nd-EM8bIc/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">one day you ... "movie trailer"</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1eoHeQUxDAhtbykIzjUKuX_952eOIl101/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">god is great "shorts"</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1OOL6lW0PVEKJyYrbLpJdogBrVoScnpMa/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">cool transitions with a cup</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1q3rnl3b0qpFIw_C0IXfoZfsR3x8t3NUO/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">VFX change sky</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1mTEC-97qeWDsLG_FRbM04iFctr-7BDwO/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">space "shorts"</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1Ko2SkWLc6V4_rnXgvu4LtXRJ8SvdlxiD/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">tiktok subtitles -1</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1OOL6lW0PVEKJyYrbLpJdogBrVoScnpMa/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">shwepps</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1KzmuoHwsOrhKfdm8-U8xL_AwGAl91wm5/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">tiktok subtitles -2</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1LnOvMqzbnKVgXBdaFIFtf1QyXCRXmr9C/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">messi's expensive items</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1U58F-07HPeLYmJhHZkSHAWz1kXOUdi16/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">The truman show</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1gfzHcbjnLLljK2hOoUrL1fNONfw3Imxu/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">6 old falgs</p>
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
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1rP9jppy7Ce-tuhH9D_vzDwLj23bI4PAS/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Fitness</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1fu5toW9YJdUVDFiy7BkJvFzmjzIKn1O-/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Life is too...</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1_GRWd5L5Wm1-YPphDfsGPlwmxSLJB1h2/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Fitness & Food</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiktoks;
