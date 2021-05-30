import React from 'react'
import first from "./assets/Careviger1.svg"
import second from "./assets/Careviger2.svg"
import third from "./assets/Careviger3.svg"
import fourth from "./assets/Careviger4.svg"
import Card2 from './Card2'
import dot from "./assets/Group 49.svg";

const Section3 = () => {
    const data1=[
        {
            "link":`${first}`,
            "head":"1. Initial Consultation",
            "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non."
        },
        {
            "link":`${second}`,
            "head":"2. Customized Care Plan",
            "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non."
        },
        {
            "link":`${third}`,
            "head":"3. Caregiver Matching",
            "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non."
        },
        {
            "link":`${fourth}`,
            "head":"4. Ongoing Support & Supervision",
            "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non."
        }
    ]
    const card2 = (val, index) => {
        return (
            <Card2 link={val.link} head={val.head} content={val.content} />
        );
    };
    return (
        <>
           <div className="upper">
               <div className="head2">
                   <p>How We Find <b>Best Careviger</b> For You</p>
               </div>
               <div className="wrapper">
               {data1.map(card2)}
               </div>
               <img id="dot" src={dot} alt="" />
            </div> 
        </>
    )
}

export default Section3
