import React from "react";
import "./Portfolio.scss";
import Scroll from "../../components/Scroll/Scroll";
import { Link } from "react-router-dom";

const CashCow = () => {
  return (
    <div className="portfolio-page">
      <Scroll />

      <h2 className="text-center">Cash Cow Video Editing</h2>

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
              src="https://drive.google.com/file/d/12wd0DYqhBRA-z0ZGhgg-rplwNPkz57vn/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Goat</p>
          </div>

          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1L3kNMDF-WFi6gjLW04WR3kTPYh9dl4ak/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">How to make mill....</p>
          </div>

          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1cSmqbbewuYtmqKM1pW9s0YqxhhtwraW7/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Mr Beast's content ...</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1tUOtX31Th47wJGKS-dwFThUS5IYQaNIf/preview"
            ></iframe>
            <p className="portfolio-par">jeff bezos...</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1TR8WuVOYzoUr7E9hwfQ5PnA3RlL11YR5/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">google emplyees</p>
          </div>

          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1jzHWnypiHYON5fm8ZFxo6EIrxmaGSYDk/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">have you seen...</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1U58F-07HPeLYmJhHZkSHAWz1kXOUdi16/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">the truman show</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1DQ-eVcjpQOHlHpjkL3KVrI5i-Y_ZQOQf/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">the most humiliating...</p>
          </div>

          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1Ed6K4rOzHIdcy7zaW4MATOPRYvKBl78V/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">why ferrari...</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1Wi_Zm6l4e1AFT-OsGU89qDfat50dIx_y/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Dark5 Incredible</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1E_WVaSSu8AFJjspTI-_5DQEyouyRoyw5/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Porsche Brand</p>
          </div>
        </div>
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
              src="https://drive.google.com/file/d/1Mibe3iyLlRdw7s7th_th8gIc4cPTroCo/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">habits that ...</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1T6vhVAg0OIPmujmIw8wj2PztCEFHV7-B/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">2030</p>
          </div>
        </div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1ncFSKz-L4A9CC-tsackpSjqfyvRLrLqq/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">tesla</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe className="portfolio-iframe" allow="autoplay"></iframe>
            <p className="portfolio-par"></p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe className="portfolio-iframe" allow="autoplay"></iframe>
            <p className="portfolio-par"></p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1KzmuoHwsOrhKfdm8-U8xL_AwGAl91wm5/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">tiktok subtitles -2</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1C3j0S_2BF7RJ3YBtYEP0agzwAM_KuWAw/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">elon musk just officially</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              src="https://www.youtube.com/embed/OS2laXlOOmU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="portfolio-iframe"
            ></iframe>
            <p className="portfolio-par">The Cons of Violence</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1YdhVzsYg9WnvOKQiU0Hw8LYqV70CjPQr/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">top 10 "Elvis"</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/15SQEZjoMSALfk57Mh51usv_OatzTgfgG/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">gigi hadid</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1UHjL7c9XxYTWeAVqZYllNtN1GHeiVfee/preview"
            ></iframe>
            <p className="portfolio-par">Stone Island</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1Asy6jbe5c_JM3Mmsvi8nUUOSf2YgWy8f/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Bazzier food</p>
          </div>

          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1-dsWsVwfOKa4maTuFouO2ftrUIVXVPy-/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">unbelivable rain "cash cow"</p>
          </div>

          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1jGyiR3Rm-KM_wMgA-Yo1Ob9FzgAgbEf4/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Millie bobby... "actress"</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/11yrEBowfuKKLv61RDSKDvo_sl58IG_zS/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">nasa</p>
          </div>

          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1pKc8tEQaNm-5AuVr3dLgaJ3Jo80pyIJB/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Elon musk slams CM'...</p>
          </div>

          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1XG1QMl-IxtcsarsuH1c1UfqV7nnZPU1X/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">gg</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              src="https://www.youtube.com/embed/ncVtDlejXFo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="portfolio-iframe"
            ></iframe>
            <p className="portfolio-par">Warren Buffet</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              src="https://www.youtube.com/embed/q2xk19Korw8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="portfolio-iframe"
            ></iframe>
            <p className="portfolio-par">crypto currency</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1Chltm3DWPq_FQWcr2PRPzEOKtWb6gtDG/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">digest "indian"</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1bltT97VP6JHIAbT1ipdFzB8fU2OFlee2/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Mysterious found things ever</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1acNZQFkG3sGtsl3mTphmY9RQdHAgs-uD/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">the mazda mx 30 "cars"</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1fTmJBLcMrjPcLH7sr5Q1ULlQCyKgSILb/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">one day...</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/18PvkujNTuQcIA4IAKeFQK3EjGBd7mIPc/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">facts about coffe</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1PEHqnW6H20ZEMWC5QpC7QKa4p6knvM_F/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">energy supplement</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/15NtBrGuk_OQiHTppNHJwEXV1btyv0BDK/preview"
            ></iframe>
            <p className="portfolio-par">top 10 fastest cars</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1sOsM0LLJURIynhFx2m0r1NLt5eQq0zzp/preview"
            ></iframe>
            <p className="portfolio-par">why you should...</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1YNKuaiYmIRJpRArTI_1cX7LnRDP8G4sG/preview"
            ></iframe>
            <p className="portfolio-par">elon musk's brain...</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/151kDTsLdbhMydIF4keHv6BhdbwJXo2fc/preview"
            ></iframe>
            <p className="portfolio-par">to know about...</p>
          </div>
        </div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1g720rl-s4Pp7CpFqzk-kVRWCXSg-zlpJ/preview"
            ></iframe>
            <p className="portfolio-par">sandbox metaverse</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/12-bHYy-WDgoE5ypVDav-kgwtAc1Rqdoh/preview"
            ></iframe>
            <p className="portfolio-par">is bitcoin...</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1bT-4_tdWDHZOYK77dwkDIaTr-ur2NdVc/preview"
            ></iframe>
            <p className="portfolio-par">amazing wildlife</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1CZ79CbeNoX7zvPeHPlDGSEbuxiCnczXG/preview"
            ></iframe>
            <p className="portfolio-par">best places to visit</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1xF04hNOU5lHGG8-GX134lhcAmNuROUmK/preview"
            ></iframe>
            <p className="portfolio-par">best places... in italy</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1ic1_V9e1x9j4MFS6WbN2QJRWBXzN1I6l/preview"
            ></iframe>
            <p className="portfolio-par">coolest pet...</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1iZmxU4HBO2TcimZL68UVvdLZsctQ8tM1/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">to keep in shape...</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/14oFx5Btp7AGRBt39vqcaVYJv-CA8Jx-2/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">The Farmer Boy</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1SSQjEFW1_mKcr6HfgckOjiAd45xJ_r4D/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">mahmoud alaraby</p>
          </div>
        </div>
        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4"></div>
      </div>
    </div>
  );
};

export default CashCow;
