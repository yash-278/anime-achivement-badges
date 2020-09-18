import React from "react";
import { Link } from "react-router-dom";

import "./awc.styles.scss";

const Awc = () => (
  <div className="awc">
    <div>
      <Link className="outline purple-white" to="/awc/tier">
        Tier
      </Link>
    </div>
    <div>
      <Link className="outline purple-white" to="/awc/genre">
        Genre
      </Link>
    </div>
    <div>
      <Link className="outline purple-white" to="/awc/special">
        Special
      </Link>
    </div>
    <div>
      <Link className="outline purple-white" to="/awc/seasonal">
        Seasonal
      </Link>
    </div>
    <div>
      <Link className="outline purple-white" to="/awc/monthly">
        Monthly
      </Link>
    </div>
    <div>
      <Link className="outline purple-white" to="/awc/collection">
        Collection
      </Link>
    </div>
  </div>
);

export default Awc;
