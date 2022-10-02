import React from "react";
import "./Portfolio.scss";
import Scroll from "../../components/Scroll/Scroll";
import { Link } from "react-router-dom";

const Motion = () => {
  return (
    <div className="portfolio-page">
      <Scroll />

      <h2 className="text-center">Motion Graphic Video Editing</h2>

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
              src="https://drive.google.com/file/d/1dtORIT9FNtwyHeinhLduHJSdy1ch_sE9/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">NetworkRMIT_Explainer</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1CBYEi4wEtohD0tCc0lhYBw09rAESD3Qf/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">UnCopy Attendance ...</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1L-aq-9csX65XAvX76c82pE7mmGYHygcJ/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">2D animation</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1xho45nqskZIk5l567YU9G7kQuT_eojbJ/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">farmer app</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1qSW4sVeSsOdSHUP1A7WkB1Om9QMX_Ukm/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">2D explainer-Phonexa</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1b470lPP-E0kAAHgjHZpTOf6pHsGiU5C5/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">AppMySite</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1iaf9SwqFSP5eo7f--o8kdQB19iGkkG3y/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">blixo</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1GsWTfysUESlRDiLLwUdEhR6xC-lMBrpw/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">elyments app</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/12SKmDvhdBLLkqIov99AUQywX11jTV5IA/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Framer_ Jan Creatives</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1rD3Noj9pgvJ9Vyh9YiL5P1xKPw7l0aaq/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Lusha Tutorial</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/148UNCqrnciRmzpAUrl3TxD9RiP_tCC9q/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">motion promo</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1VxsBfX7ODXPHExWzfBs3X9DdGFx6-tmh/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">man kind has ...</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1qp2h0BjYqYAtXOEnnoahJWOGQJwHudFe/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">are you ....</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1IwUFaHxIALKqE6m6ggbn4f4-YsRCMFTN/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Online Store Flipkart First Draft</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1fJcjr82Ufy6uflYMZ5HlJHpdlQz16jLr/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Magaz</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1pxG6tu5WRuu4FcREh-evSjywb4grgXqQ/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">turta</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1TydwoSq6zNMIk14qtMb7s0m6vDTTFNMW/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Al bashir</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1e9U4TEaCgLuMOrSazc7yUupLAfTyB4bB/preview"
            ></iframe>
            <p className="portfolio-par">choclate lovers</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1eo-Bl0IprptXoMuHTYtpC-P6XisjaUBK/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">EMC</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1hXE1gUid3KpTl54080WKWhKv9AYteFad/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Vodafone cash</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1j76aGcrflGVSnnCxSMv32_q3tCq_VAg4/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Animals & doctors</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1xU5clGzG2RrTXw715c3xQEpp8bfAmZeW/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">to top</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1AlqgOXp6BKzm5uh9SbAz7Jyv5gzSHniI/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Christmas</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/14gJdUnlUuEvLaHr1AvmgvUCDIr9ARX-W/preview"
              width="640"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">World war 3</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
              <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              src="https://www.youtube.com/embed/C_rSmt82c0c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="portfolio-iframe"
            ></iframe>
            <p className="portfolio-par">green screen</p>
          </div>
        </div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4"></div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4"></div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4"></div>
      </div>
    </div>
  );
};

export default Motion;
