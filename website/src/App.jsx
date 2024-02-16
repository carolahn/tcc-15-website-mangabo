import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Profile } from "./pages";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoute";
import CacheBuster from 'react-cache-buster';
import { version } from '../package.json';
import Loading from './loading';

export default function App() {
  const isProduction = process.env.NODE_ENV === 'production';
  return (
    <CacheBuster
      currentVersion={version}
      isEnabled={isProduction} //If false, the library is disabled.
      isVerboseMode={false} //If true, the library writes verbose logs to console.
      loadingComponent={<Loading />} //If not pass, nothing appears at the time of new version check.
      metaFileDirectory={'.'} //If public assets are hosted somewhere other than root on your server.
    >
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Router>
            <div>
              <Switch>
                <Route exact path="/login" component={Login} />
                <ProtectedRoute exact path="/" component={Profile} />
              </Switch>
            </div>
          </Router>
        </PersistGate>
      </Provider>
    </CacheBuster>
  );
}
