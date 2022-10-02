import React from "react";
import "./Portfolio.scss";
import Scroll from "../../components/Scroll/Scroll";
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <div className="portfolio-page">
      <Scroll />

      <h2 className="text-center">Ads & Promos Video Editing</h2>

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
              src="https://drive.google.com/file/d/1mBD8rKCWlpULuRsOKM0sV8ga5im7ToZC/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">hold tight</p>
          </div>
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
              src="https://drive.google.com/file/d/1U-OuHv1waPcnzY7aFB8fdXlkQoK313Vu/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">cars promo</p>
          </div>
        </div>

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
              src="https://drive.google.com/file/d/12mT8R0iqH3TZA7mIvXeVtjVCZ1cdaSvw/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">steelo mechanics "promo"</p>
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
              src="https://drive.google.com/file/d/147QidHDb3-g4Rz_opH27klOWDyGyDlRS/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">best products for cars</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1Tk6ougazslcJV0QpBCVYLWx4ODXOK2hM/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">music promo</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/19VEon03ny49QLGO-ry2hc_6ZWfecjh0-/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Caffe promo</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1lWuAhDLJjMYMtNYcN7uDD0bB226e7D9m/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">usman baig fragnances</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1Ohbfxmkv7t36tvbh_dfXM35NrZqC0Ac3/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">SPINNING "promo ad"</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1UD1xIoRktDLCVpJCbXdFUtoKFnraoNvu/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Watch - Facebook</p>
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
              src="https://drive.google.com/file/d/1r9q1vL6V97gIkwGpdyfBStK_tntK6YRp/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Vlado Interview</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1VVg_Tu40kixTdo6ItPvIvlIAeY2FBt7V/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">OUT LET AVE PROMO</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              src="https://www.youtube.com/embed/PCCoVZVZkrQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="portfolio-iframe"
            ></iframe>
            <p className="portfolio-par">real state</p>
          </div>

          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1bYwa1huOC5z7S3YswHXbjlLRR-6jz-Jc/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">ٍStudio 150 "promo ad"</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1DTUyL4-2eJ1MYT7AJy2auJJ9se3sSGdm/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Elogic Tech "ad"</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/15QSAslZKqqrzbGeyxwoCYje73IG_1iDS/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">Product's ad</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/11fRgk_EVw0zPM4KRYUXWou4La0gJIHtY/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">train your... "promo</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1ZJQ1ccqY8gph7pcoPgP7fg2q4jUrBFs4/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">simple promo</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1o-i3RJkweicDFRRYe-n4ZD0FfQ6Vm050/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">plane fly promo</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1hcYlyiaK66wEh9Uu8QNN2ZpU-O0Yfq6L/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">be marbled</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1Br0A4Z1UUVU4JIBdwgaztu0QDiJSHzme/preview"
            ></iframe>
            <p className="portfolio-par">haarstudio manuel</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1krxdIkb3Zv4hswZywmNa-O-_WOHA478L/preview"
              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">HBL Corporate</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1VzwevUkihYtF94BWgJ-qjGr73gDzaM9-/preview"
            ></iframe>
            <p className="portfolio-par">historical promo</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1f-GmeaEpQs29mXQoa-vPtjstNBB0DXlp/preview"
            ></iframe>
            <p className="portfolio-par">Al Ahly vs zamalek</p>
          </div>
        </div>

        <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
              src="https://drive.google.com/file/d/1LbxDiWy6TNHXK8hrNrzDm_ttmGcM5sTx/preview"
            ></iframe>
            <p className="portfolio-par">travelers united</p>
          </div>
          <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
            <iframe
              className="portfolio-iframe"
src="https://drive.google.com/file/d/1PEHqnW6H20ZEMWC5QpC7QKa4p6knvM_F/preview"              allow="autoplay"
            ></iframe>
            <p className="portfolio-par">energy supplement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
