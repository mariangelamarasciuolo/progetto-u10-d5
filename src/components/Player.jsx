import React from "react";
import { Link } from "react-router-dom";

const Player = () => (
  <div className="container-fluid fixed-bottom bg-container pt-1">
    <div className="col-lg-10 offset-lg-2">
      <div className="row">
        <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
          <div className="row">
            <Link to="#">
              <img src="/playerbuttons/Shuffle.png" alt="shuffle" />
            </Link>
            <Link to="#">
              <img src="/playerbuttons/Previous.png" alt="previous" />
            </Link>
            <Link to="#">
              <img src="/playerbuttons/Play.png" alt="play" />
            </Link>
            <Link to="#">
              <img src="/playerbuttons/Next.png" alt="next" />
            </Link>
            <Link to="#">
              <img src="/playerbuttons/Repeat.png" alt="repeat" />
            </Link>
          </div>
        </div>
      </div>
      <div className="row justify-content-center playBar py-3">
        <div className="col-8 col-md-6">
          <div id="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={0}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Player;
