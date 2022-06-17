import React from "react";

import { Cards, Chart, CountryPicker } from "../src/components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
