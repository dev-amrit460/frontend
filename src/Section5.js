import React from 'react'
import arrowR from './assets/arrow-right.svg'
import star from "./assets/Frame 329.png"
import Card3 from './Card3'

const Section5 = () => {
    const para="2,054 verified customers reviews by Google."
    const data2=[
        {
            "head":"Alvin Stanley",
            "star":`${star}`,
            "para":"Great company to work for! This organization cares for its team of caregivers, office employees, and clients. There is always someone available to pick up the phone when you need help."
        },
        {
            "head":"Alvin Stanley",
            "star":`${star}`,
            "para":"Great company to work for! This organization cares for its team of caregivers, office employees, and clients."
        },
        {
            "head":"Alvin Stanley",
            "star":`${star}`,
            "para":"Awesome!"
        },
    ]
    const card3=(val,index)=>{
        return(
            <Card3 head={val.head} star={val.star} para={val.para}/>
        )
    }
    return (
        <div className="SecFive">
            <div className="card-in">
                <span>
                    <h1>5.0</h1>
                    <img src={star} alt=""/>
                    <p>{para}</p>
                </span>
                <div className="trick">{data2.map(card3)}</div>
                {/* {window.innerWidth>1024?data2.map(card3):""} */}
            </div>
            <div className="seeMore"><p>SEE ALL REVIEWS</p><span><img src={arrowR} alt=""/></span></div>
        </div>
    )
}

export default Section5
