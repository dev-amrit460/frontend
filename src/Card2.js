import React from 'react'

const Card2 = (props) => {
    return (
        <>
           <div className="cardBody">
               <img style={{zIndex:`2`}} src={props.link} alt=""/>
               <p className="head3">{props.head}</p>
               <p className="content">{props.content}</p>
            </div> 
        </>
    )
}

export default Card2
