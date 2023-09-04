import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {

  const { data } = props;

  /* Render Tile components */
  const tiles = data.map((obj, index) => {
    /* Use restructuring syntax to extract the name property from each object and use ...rest syntax to get the description */
    const name = obj.name;
    const description = {...obj};
    return <Tile key={index} name={name} description={description} />
  });

  return (
    <div>
      {tiles}
    </div>
  );
};
