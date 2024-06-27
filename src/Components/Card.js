import React from "react";



const Card = (props) => {
    const {name, email, phone, id} = props;
    return (
        <div className="tc bg-light-blue pa3 ma2 br3 dib grow shadow-5 bw2">
            <img src={`https://robohash.org/${id}salam`} alt="robot_photo"/>
            <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{`Phone Number : ${phone}`}</p>
            </div>
        </div>
    );
}


export default Card;