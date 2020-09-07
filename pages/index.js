import Head from "next/head";
import styles from "../styles/Home.module.css";
import { StaticRouter as Router, Switch, Route, Link } from "react-router-dom";
import First from "../components/First.jsx";

export default function Home() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <First />
        </Route>
      </Switch>
    </Router>
  );
}
