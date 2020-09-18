import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/navbar.component";
import Homepage from "./pages/homepage/homepage.component";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
