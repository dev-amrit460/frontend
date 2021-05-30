import React from "react";

const Card3 = (props) => {
  return (
    <div className="card3">
      <h1>{props.head}</h1>
      <img src={props.star} alt="" />
      <p>{props.para}</p>
    </div>
  );
};

export default Card3;
