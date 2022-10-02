import React from "react";
import "./process.scss";
import { RiDownloadCloudFill } from "react-icons/ri";
import { MdReviews } from "react-icons/md";
import { TiVideo } from "react-icons/ti";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { Fade, Flip, Roll } from "react-reveal";

const Process = () => {
  return (
    <div className="process">
      <div className="container text-center">
        <div className="process-heading">
          <Fade top>
            <h1>Video Editing Service Process</h1>
          </Fade>
          <Fade bottom>
            <p>
              We guide you through the process step-by-step. The steps are
              simple,
            </p>
          </Fade>
          <Fade top>
            <p>and we are always there by your side to guide you through.</p>
          </Fade>
        </div>
        <Fade top>
          <div className="process-explanation">
            <div className="row d-flex justify-content-center align-items-center gap-4 mb-2">
              <Roll left>
                <div className="col-md">
                  <div className="process-icon">
                    <RiUploadCloud2Fill />
                  </div>
                  <div className="process-par">
                    1. Customer uploads the video file and brief
                  </div>
                </div>
              </Roll>
              <Fade top>
                <div className="col-md">
                  <div className="process-icon">
                    <TiVideo />
                  </div>
                  <div className="process-par">
                    2. The video file is edited and & uploaded
                  </div>
                </div>
              </Fade>
              <Fade top>
                <div className="col-md">
                  <div className="process-icon">
                    <MdReviews />
                  </div>
                  <div className="process-par">
                    3. Customer reviews the video file
                  </div>
                </div>
              </Fade>
              <Roll right>
                <div className="col-md">
                  <div className="process-icon">
                    <RiDownloadCloudFill />
                  </div>
                  <div className="process-par">
                    4. The file is uploaded for easey download
                  </div>
                </div>
              </Roll>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Process;
