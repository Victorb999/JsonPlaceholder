import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Posts from "./components/Posts";
import ToDos from "./components/ToDos";
import Albums from "./components/Albums";

import "./styles/global.scss";
import styles from "./styles/app.module.scss";

export default function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route path="/todos">
              <ToDos />
            </Route>
            <Route path="/albums">
              <Albums />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
