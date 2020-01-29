import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicial from "./pages/inicial/Inicial";
import Confirmacao from "./pages/confirmacao/confirmacao";
import SaibaMais from "./pages/saiba-mais/SaibaMais";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Inicial} />
      <Route exact path="/confirmacao" component={Confirmacao} />
      <Route exact path="/saiba-mais" component={SaibaMais} />
    </Switch>
  </BrowserRouter>
);

export default Router;
