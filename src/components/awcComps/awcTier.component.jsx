import React from "react";

import "../../App.css";

const AwcTier = () => (
  <div className="awc gallery-container">
    <div className="gallery">
      <div className="gallery-kuso">
        <div>
          <h4>AWC Tier Badges</h4>
        </div>

        <hr className="solid" />

        <div className="image-row">
          <img
            className="image-kuso"
            src="https://annahoj-awc.carrd.co/assets/images/gallery01/13ebb552.jpg?v75304789816951"
            alt=""
            style={{ filter: "grayscale(100%)" }}
          />
          <img
            className="image-kuso"
            src="https://annahoj-awc.carrd.co/assets/images/gallery01/fc038c9e.jpg?v75304789816951"
            alt=""
            style={{ filter: "grayscale(100%)" }}
          />
          <img
            className="image-kuso"
            src="https://annahoj-awc.carrd.co/assets/images/gallery01/8724e14f.jpg?v75304789816951"
            alt=""
            style={{ filter: "grayscale(100%)" }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default AwcTier;
