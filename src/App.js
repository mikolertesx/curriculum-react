import { HashRouter, Route, Switch } from "react-router-dom";
// Basic styles.
import "./App.css";

import Nav from "./shared/Nav";
// Pages.
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
