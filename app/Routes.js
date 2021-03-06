import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'App/App';
import Home from 'Home/Home';
import Buttons from 'Buttons/Buttons';
import TextFields from 'TextFields/TextFields';
import Autosuggest from 'Autosuggest/Autosuggest';
import Icons from 'Icons/Icons';
import Typography from 'Typography/Typography';
import Textarea from 'Textarea/Textarea';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="/buttons" component={Buttons} />
    <Route path="/textfields" component={TextFields} />
    <Route path="/autosuggest" component={Autosuggest} />
    <Route path="/textarea" component={Textarea} />
    <Route path="/icons" component={Icons} />
    <Route path="/typography" component={Typography} />
  </Route>
);
