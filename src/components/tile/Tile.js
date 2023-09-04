import React from "react";

export const Tile = (props) => {

  const { name, description } = props;

  const descriptionElements = Object.values(description).map((value, index) => {
    return <p key={index} className="tile">{value}</p>
  });

  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {descriptionElements}
    </div>
  );
};
