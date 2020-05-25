import React from "react";

import ChampionPreview from "../champion-preview/champion-preview.component";

import "./champion-collection.styles.scss";

const ChampionCollection = ({ champions }) => (
  <div className="champions-collection">
    {champions.map(({ name, ...otherProps }) => (
      <ChampionPreview key={name} {...otherProps} />
    ))}
  </div>
);

export default ChampionCollection;
