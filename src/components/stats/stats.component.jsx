import React from "react";

const Stats = () => (
  <div>
    <div className="name">
      <span>Stats</span>
      <hr className="solid" />
    </div>
    <div className="gallery-container">
      <div className="gallery">
        <div className="gallery-left">
          <div>
            <h4>Episodes Watched</h4>
          </div>

          <div className="image-row">
            <img className="image-genre" src="https://i.imgur.com/r5Wfqfz.png" alt="" />
            <img
              className="image-genre"
              src="https://i.postimg.cc/7YWCh2x1/2000_Episodes_Watched_ReVamp.png"
              alt=""
            />
            <img
              className="image-genre"
              src="https://i.postimg.cc/dQC3wmnG/3000_Episodes_Watched_ReVamp_transparent.png"
              alt=""
            />
          </div>
          <hr className="solid" />
          <div>
            <h4>Chapters Read</h4>
          </div>

          <div className="image-row">
            <img
              className="image-genre"
              src="https://i.postimg.cc/j2yfPqZq/1000-Read-Re-Vamp.png"
              alt=""
            />
            <img
              className="image-genre"
              src="https://i.postimg.cc/cHpYvt75/2000-Read-Re-Vamp-transparent.png"
              alt=""
            />
            <img
              className="image-genre"
              src="https://i.postimg.cc/Y2FYJ8Mc/3000-Read-Re-Vamp-transparent.png"
              alt=""
              style={{ filter: "grayscale(100%)" }}
            />
          </div>
          <hr className="solid" />
        </div>
        <div className="gallery-right">
          <div>
            <h4>Days Watched</h4>
          </div>

          <div className="image-row">
            <img
              className="image-mastery"
              src="https://i.postimg.cc/66hB6YJN/Fledgling-Variant-2.png"
              alt=""
            />
          </div>
          <div className="image-row">
            <img
              className="image-mastery"
              src="https://i.postimg.cc/MpnwDwcW/Hardened-Variant-1.png"
              alt=""
            />
          </div>
          <div className="image-row">
            <img
              className="image-mastery"
              src="https://i.postimg.cc/d1jc1tf9/Monster-Variant1.png"
              alt=""
              style={{ filter: "grayscale(100%)" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Stats;
