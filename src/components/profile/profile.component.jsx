import React from "react";

import "./profile.styles.scss";

const Profile = () => (
  <div>
    <div className="pic-container">
      <img className="pic" src="avatar.png" alt="Profile Picture" />
    </div>
    <div className="name">
      <span>Yash</span>
    </div>
    <div className="title">
      <span>Full-time Computer Science student</span>
    </div>
    <div className="description">
      <p>
        Just your average boy who's into anime and happened to stumble upon AniList and later AWC
      </p>
      <p>
        IRL I'm quite a shy but friendly and hard-working (though lazy) 20-year-old university
        student from India.
      </p>
    </div>
    <div className="points">Points : 7 | Rank : Novice</div>
    <a className="btn btn-primary message" href="https://anilist.co/user/Yash/">
      AL Profile
    </a>
  </div>
);

export default Profile;
