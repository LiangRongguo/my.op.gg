import React, { Component } from "react";

import "./homepage.styles.scss";

class HomePage extends Component {
  state = {};
  render() {
    const imageUrl =
      // "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_6.jpg";
      "https://images2.alphacoders.com/964/964702.png";
    return (
      <div className="Home">
        <div
          className="img"
          style={{
            width: "70%",
            height: "600px",
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
        <span className="title">Welcome to Summoner's Rift</span>
      </div>
    );
  }
}

export default HomePage;
