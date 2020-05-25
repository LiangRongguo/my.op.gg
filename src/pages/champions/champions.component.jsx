import React, { Component } from "react";
import CHAMPION_DATA from "./champions.data.js";

import "./champions.styles.scss";

import ChampionCollection from "../../components/champion-collection/champion-collection.component";

class ChampionsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      champions: CHAMPION_DATA,
    };
  }

  render() {
    const { champions } = this.state;
    return (
      <div className="champions-page">
        {champions.map(({ id, ...otherProps }) => (
          <ChampionCollection key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ChampionsPage;
