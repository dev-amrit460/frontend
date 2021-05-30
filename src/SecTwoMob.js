import React from "react";
import one from "./assets/feature1.png";
import seven from "./assets/feature7.png";
import two from "./assets/feature2.png";
import three from "./assets/feature3.png";
import four from "./assets/feature4.png";
import five from "./assets/feature5.png";
import six from "./assets/feature6.png";
import phone from "./assets/feature-phone.svg";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Card from "./Card";
import { Splide } from "@splidejs/react-splide";

const SecTwoMob = () => {
    const para =
        "UniversaCare offers a range of services for in-home care.  We are your partners in care, and work with you to come up with a plan of action. ";
    const data = [
        {
            image: `${one}`,
            head: "Hourly Home care",
            para: "4x higher coverage limit than it is in traditional policies for computers and home office equipment.",
            id: "",
        },
        {
            image: `${two}`,
            head: "Personal Care",
            para: "4x higher coverage limit than it is in traditional policies for computers and home office equipment.",
            id: "",
        },
        {
            image: `${three}`,
            head: "Private Nursing",
            para: "4x higher coverage limit than it is in traditional policies for computers and home office equipment.",
            id: "three",
        },
        {
            image: `${four}`,
            head: "Respite Care",
            para: "4x higher coverage limit than it is in traditional policies for computers and home office equipment.",
            id: "four",
        },
        {
            image: `${five}`,
            head: "Life-in Aid",
            para: "4x higher coverage limit than it is in traditional policies for computers and home office equipment.",
            id: "five",
        },
        {
            image: `${six}`,
            head: "Memory Care",
            para: "4x higher coverage limit than it is in traditional policies for computers and home office equipment.",
            id: "six",
        },
        {
            image: `${seven}`,
            head: "Memory Care",
            para: "4x higher coverage limit than it is in traditional policies for computers and home office equipment.",
            id: "seven",
        },
    ];
    const card = (val, index) => {
        return (
            <Card image={val.image} head={val.head} para={val.para} id={val.id} />
        );
    };
    return (
        <>
            <div className="parentmob">
                <div id="onemob">
                    <p id="para4mob">
                        Your peace of mind is <br /> <b>our number one priority.</b>
                    </p>
                    <hr />
                    <p id="para5mob">{para}</p>
                </div>
                <div className="cardContainer">
                    <Splide
                        options={{
                            rewind: true,
                            width: 669,
                            gap: '0rem',
                            perPage: 3,
                            perMove: 1,
                            autoplay: true,
                            pagination: false,
                        }}
                    >{data.map(card)}</Splide>

                </div>
                <span className="Card" id="mobcard">
                    <img src={phone} alt=""></img>
                    <h2>Do you need support?</h2>
                    <p className="para6">We glad to help!</p>
                    <button id="btn1">CONTACT US</button>
                </span>
            </div>
        </>
    );
};

export default SecTwoMob;
