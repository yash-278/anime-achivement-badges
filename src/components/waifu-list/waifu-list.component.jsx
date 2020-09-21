import React from "react";

const Waifu = () => (
  <div className="gallery-container">
    <div className="gallery">
      <div className="gallery-kuso">
        <br />
        <div>
          <h4>Waifu List</h4>
        </div>
        <hr className="solid" />

        <div className="image-row">
          <img className="image-genre" src="https://i.imgur.com/Ix69zPx.png" alt="" />
          <img
            className="image-genre"
            src="https://i.postimg.cc/HxRPGjN6/HITAGI-Monogatari.png"
            alt=""
          />
          <img className="image-genre" src="https://i.postimg.cc/KjvPd5NP/RE-ZERO-REM.png" alt="" />
        </div>
        <hr className="solid" />
        <div className="image-row">
          <img
            className="image-genre"
            src="https://i.postimg.cc/7ZYkb98T/SHIRO-No-Game-No-Life.png"
            alt=""
          />
          <img
            className="image-genre"
            src="https://i.postimg.cc/xT6WShf7/MEGUMIN-Konosuba.png"
            alt=""
          />
          <img
            className="image-genre"
            src="https://i.postimg.cc/nL4TM0Cf/MAYOI-Monogatari.png"
            alt=""
            // style={{ height: "20%" }}
          />
        </div>
        <div className="image-row">
          <img
            className="image-genre"
            src="https://i.postimg.cc/jqySPDpR/RE-ZERO-BEATRICE.png"
            alt=""
          />
          <img
            className="image-genre"
            src="https://i.postimg.cc/s2smz2G3/LUCY-Fairy-Tail.png"
            alt=""
          />
          <img
            className="image-genre"
            src="https://i.postimg.cc/vZ642GTz/KAGUYA-Kaguya-sama-Love-is-War.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
);

export default Waifu;
