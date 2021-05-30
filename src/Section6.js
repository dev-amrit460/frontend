import React from 'react'
import heart from "./assets/healthcare.svg"
import up from "./assets/Frame 60.svg"

const Section6 = () => {
    const head="WE DO WHATEVER IT MAKES TO BRING YOU PEACE OF MIND"
    return (
        <div className="blueSec">
            <h1 id="headb">{head}</h1>
            <button id="Btnb">REQUEST AN APPOINTMENT</button>
            <img id="imgb" src={heart} alt=""/>
            <img id="up" src={up} alt=""/>
        </div>
    )
}

export default Section6
