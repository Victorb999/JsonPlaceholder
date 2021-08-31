import "./styles/global.scss";
import Posts from "./components/Posts";
import Header from "./components/Header";

import styles from "./styles/app.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Switch>
            <Route path="/posts">
              <Posts />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
