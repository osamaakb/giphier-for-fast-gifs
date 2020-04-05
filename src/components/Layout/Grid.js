import React from "react";
import GridItem from "./GridItem";
import "./style.css";

const Grid = ({ items, onItemClick }) => (
  <div className="grid">
    <div className="row m-2 text-center">
      {items.map(item => (
        <GridItem item={item} key={item.id} onItemClick={onItemClick} />
      ))}
    </div>
  </div>
);

export default Grid;
