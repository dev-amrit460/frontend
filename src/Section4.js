import React from 'react'
import Img from "./assets/CHAP.png"


const Section4 = () => {
    const head="CHAP Accreditation and this line can be about this big"
    const para="UniversaCare, LLC will provide the following home health care programs at flexible schedules and cost-friendly service rates. "
    return (
        <>
            <div className="Containertwo">
                <span className="row1">
                    <img src={Img} alt=""/>
                </span>
                <div className="row2">
                    <div className="column1">
                        <h3>{head}</h3>
                    </div>
                    <div className="column2">
                        <p>{para}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section4
