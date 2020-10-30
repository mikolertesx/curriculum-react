import { HashRouter, Route, Switch } from "react-router-dom";
// Basic styles.
import "./App.css";
// Import language context.
import { LanguageProvider } from "./context/language";

import Nav from "./shared/Nav";
// Pages.
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <HashRouter>
          <Nav />
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/about-me" exact={true}>
              <About />
            </Route>
          </Switch>
        </HashRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
