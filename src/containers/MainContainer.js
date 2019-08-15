import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ComplimentContainer from './ComplimentContainer';

const MainContainer = () => {

    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={ComplimentContainer} />
          </Switch>
        </React.Fragment>
      </Router>
    )
}

export default MainContainer;
