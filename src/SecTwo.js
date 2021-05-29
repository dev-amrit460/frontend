import React from "react";
import Card from "./Card";
import one from "./assets/feature1.svg"
import seven from "./assets/feature7.svg"
import two from "./assets/feature2.svg"
import three from "./assets/feature3.svg"
import four from "./assets/feature4.svg"
import five from "./assets/feature5.svg"
import six from "./assets/feature6.svg"
import phone from "./assets/feature-phone.svg"
import SecTwoMob from "./SecTwoMob";

const SecTwo = () => {

  const para="UniversaCare offers a range of services for in-home care.  We are your partners in care, and work with you to come up with a plan of action. "
  const data=[
    {
      "image":`${one}`,
      "head":"Hourly Home care",
      "para":"4x higher coverage limit than traditional policies for computers and home office equipment.",
      "id":""
    },
    {
      "image":`${two}`,
      "head":"Personal Care",
      "para":"4x higher coverage limit than traditional policies for computers and home office equipment.",
      "id":""
    },
    {
      "image":`${three}`,
      "head":"Private Nursing",
      "para":"4x higher coverage limit than traditional policies for computers and home office equipment.",
      "id":"three"
    },
    {
      "image":`${four}`,
      "head":"Respite Care",
      "para":"4x higher coverage limit than traditional policies for computers and home office equipment.",
      "id":"four"
    },
    {
      "image":`${five}`,
      "head":"Life-in Aid",
      "para":"4x higher coverage limit than traditional policies for computers and home office equipment.",
      "id":"five"
    },
    {
      "image":`${six}`,
      "head":"Memory Care",
      "para":"4x higher coverage limit than traditional policies for computers and home office equipment.",
      "id":"six"
    },
    {
      "image":`${seven}`,
      "head":"Memory Care",
      "para":"4x higher coverage limit than traditional policies for computers and home office equipment.",
      "id":"seven"
    },
  ]
  const card= (val,index)=>{
return(
  <Card image={val.image} head={val.head} para={val.para} id={val.id}/>
)
  }
  return (
    <>
    <div className="parent">
      <div id="one">
        <p id="para4">
          Your peace of mind is <br /> <b>our number one priority.</b>
        </p>
        <hr />
        <p id="para5">{para}</p>
      </div>
      {data.map(card)}
      <span className="Card last">
            <img src={phone} alt=""></img>
            <h2>Do you need support?</h2>
            <p className="para6">We glad to help!</p>
            <button id="btn1">CONTACT US</button>
            </span>
    </div>
    <SecTwoMob/>
    </>
  );
};

export default SecTwo;
