import React from 'react';
import './App.css';

const Card = (props)=>{

    return (
        <div className="card card-bg my-2 border border-dark">
            <img src={props.flag} alt={props.name} className="card-image-top card-img"/>
            <div className="card-body">
                <h3 className="card-text text-center">{props.name}</h3>
                <p className="card-text">Capital : {props.capital}</p>
                <p className="card-text">Region : {props.region}</p>
                <p className="card-text">Currency : {props.currency} ({props.symbol})</p>
                <p className="card-text">Population : {props.population}</p>
            </div>
        </div>
    )
}

export default Card;