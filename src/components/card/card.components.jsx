import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import "./card.styles.scss";

const Awc = React.lazy(() => import("../awc/awc.component"));
const Kusogaki = React.lazy(() => import("../kusogaki/kusogaki.component"));
const Stats = React.lazy(() => import("../stats/stats.component"));
const Profile = React.lazy(() => import("../profile/profile.component"));
const AwcTier = React.lazy(() => import("../awcComps/awcTier.component"));
const AwcGenre = React.lazy(() => import("../awcComps/awcGenre.component"));
const AwcSpecial = React.lazy(() => import("../awcComps/awcSpecial.component"));
const AwcSeasonal = React.lazy(() => import("../awcComps/awcSeasonal.component"));
const AwcMonthly = React.lazy(() => import("../awcComps/awcMonthly.component"));
const AwcCollection = React.lazy(() => import("../awcComps/awcCollection.component"));
const Waifu = React.lazy(() => import("../waifu-list/waifu-list.component"));

const Card = () => (
  <div className="container">
    <div className="card">
      <Suspense
        fallback={
          <div>
            <br />
            <h6>Loading...</h6>
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/awc" component={Awc} />
          <Route exact path="/stats" component={Stats} />
          <Route exact path="/kusogaki" component={Kusogaki} />
          <Route exact path="/waifu" component={Waifu} />
          <Route exact path="/awc/tier" component={AwcTier} />
          <Route exact path="/awc/genre" component={AwcGenre} />
          <Route exact path="/awc/special" component={AwcSpecial} />
          <Route exact path="/awc/seasonal" component={AwcSeasonal} />
          <Route exact path="/awc/monthly" component={AwcMonthly} />
          <Route exact path="/awc/collection" component={AwcCollection} />
        </Switch>
      </Suspense>
    </div>
  </div>
);

export default Card;
