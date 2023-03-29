import React from "react";
// import Pizza from '../images/4.jpg';
import "./Card.css";

export const Card = (props) => {
  return (
    <div className="cardContainer">
      <img src={props.imgSrc} alt="" width={200} height={170}></img>
      <div className="title">
        <h5>{props.Name}</h5>
        <h5 className="price">$13.99</h5>
      </div>
      <p>{props.description}</p>
      <button>Order Now</button>
    </div>
  );
};
