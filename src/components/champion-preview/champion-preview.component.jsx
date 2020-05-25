import React from "react";

import "./champion-preview.styles.scss";

const ChampionPreview = ({ id }) => {
  const imageUrl =
    "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" +
    id.replace(/\s+/g, "") +
    "_0.jpg";
  return (
    <div className="champion-preview">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="champion-footer">
        <span className="name">{id.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default ChampionPreview;
