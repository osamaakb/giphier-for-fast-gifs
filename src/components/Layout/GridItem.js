import React from "react";
import Image from "react-graceful-image";


const GridItem = ({ item, onItemClick }) => {

  const randomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-2 d-flex justify-content-center align-items-center">
      <div
        id={item.id}
        className="grid-item-wrapper"
        style={{ cursor: "pointer" }}
        onClick={() => onItemClick(item)}
      >
        <Image
          className="grid-item img-fluid"
          src={item.getSrc()}
          alt={item.getAlt()}
          placeholderColor={randomColor()}
        />
      </div>
    </div>
  )
};

export default GridItem;
