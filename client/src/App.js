import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './config/routes';
import { TorProvider } from './context';
import AppRoute from "./AppRoutes";
import "./App.css"

function App () {
  return (
    <div className="App">
      <TorProvider>
        <Router>
          <Switch>
            {
              routes.map((route) => (
                <AppRoute
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  isPrivate={route.isPrivate}
                />
              ))
            }
          </Switch>
        </Router>
      </TorProvider>
    </div>
  );
}

export default App;
