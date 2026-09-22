import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Home, About, Faq, Watch, WatchTrailer, News, Bible } from "./Pages";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";

export default function Routes() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/bible">
                    <Bible />
                </Route>

                <Route path="/faq">
                    <Faq />
                </Route>

                <Route path="/news">
                    <News />
                </Route>

                <Route path="/trailer">
                    <WatchTrailer />
                </Route>

                <Route path="/watch">
                    <Watch />
                </Route>


            </Switch>
            <Footer />
        </Router>
    );
}
