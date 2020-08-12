import React, { useLayoutEffect } from 'react'


const Personcard = (props) => {

    return (
        <div className="fisrtbox ">
            <h2 className="text">my name is {props.person.name}</h2>
            <h4 className="text">my username is {props.person.username}</h4>
            <h4 className="text">my email is {props.person.email} </h4>
            <h4 className="text">i live at :</h4>
            <ul className="text">
                <li>{props.person.address.city}</li>
                <li>{props.person.address.street}</li>
                <li>{props.person.address.suite}</li>
                <li>{props.person.address.zipcode}</li>
            </ul>
            <h4 className="text">call me {props.person.phone} </h4>
            <h4 className="text"> my website is <a href="">{props.person.website}</a></h4>
            <h4 className="text"> my company is</h4>
            <ul className="text">
                <li>{props.person.company.name}</li>
                <li>{props.person.company.catchPhrase}</li>
                <li>{props.person.company.bs}</li>
            </ul>
        </div>
    );
}

export default Personcard;
