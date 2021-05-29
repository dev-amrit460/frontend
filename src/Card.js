import React from 'react'
import arrowr from "./assets/Frame 306.png"
import {SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Card = (props) => {
    console.log()
    return (
        <> <SplideSlide>
            <span className="Card splide__slide" id={props.id}>
            <img src={props.image} alt=""></img>
            <h2>{props.head}</h2>
            <p className="para6">{props.para}</p>
            <img id="arrowr" src={arrowr} alt=""></img>
            </span>
            </SplideSlide>
        </>
    )
}

export default Card
