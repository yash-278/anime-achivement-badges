import React from "react";
import { Route, Switch } from "react-router-dom";
import Awc from "../awc/awc.component";
import Kusogaki from "../kusogaki/kusogaki.component";
import Stats from "../stats/stats.component";
import Profile from "../profile/profile.component";
import "./card.styles.scss";
import AwcTier from "../awcComps/awcTier.component";
import AwcGenre from "../awcComps/awcGenre.component";
import AwcSpecial from "../awcComps/awcSpecial.component";
import AwcSeasonal from "../awcComps/awcSeasonal.component";
import AwcMonthly from "../awcComps/awcMonthly.component";
import AwcCollection from "../awcComps/awcCollection.component";
import Waifu from "../waifu-list/waifu-list.component";

const Card = () => (
  <div className="container">
    <div className="card">
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
    </div>
  </div>
);

export default Card;
