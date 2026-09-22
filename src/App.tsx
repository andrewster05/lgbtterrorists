import * as React from "react";
import "./App.css";
import Landing from "components/Landing/Landing";
import { useEffect } from "react";
import Routes from "pages/Routes";

// Add support for react router later, possible react-router-ga
import ReactGA from 'react-ga';
ReactGA.initialize('UA-77649843-2');

function App() {
  // If you want to work on the final product, change this boolean
  const isDevelopingLanding = false;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const JSX = isDevelopingLanding ? (
    <div className="landing-container" data-testid="landing-page-container">
      <Landing />
    </div>
  ) : (
      <div className="app-container" data-testid="app-container">
        <Routes />
      </div>
    );

  return JSX;
}

export default App;
