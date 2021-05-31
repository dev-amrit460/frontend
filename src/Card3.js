import React from "react";
import {SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Card3 = (props) => {
  return (
    <SplideSlide>
    <div className="card3">
      <h1>{props.head}</h1>
      <img src={props.star} alt="" />
      <p>{props.para}</p>
    </div>
    </SplideSlide>
  );
};

export default Card3;
