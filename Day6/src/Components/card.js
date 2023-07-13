import React from "react";
import '../Styles/Card.css';
const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}Rs</p>
        <button className="button"onClick={() => handleClick(item)}><b>Add to Cart</b></button>
      </div>
    </div>
  );
};

export default Cards;