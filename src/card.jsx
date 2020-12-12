import React from 'react';
import './App.css';

const Card = (props)=>{

    return (
        <div className="card card-bg my-2 border border-dark">
            <img src={props.flag} alt={props.name} className="card-image-top card-img"/>
            <div className="card-body">
                <h3 className="card-title text-center">{props.name}</h3>
                <p className="card-text"><strong>Capital :</strong> {props.capital}</p>
                <p className="card-text"><strong> Region :</strong> {props.region}</p>
                <p className="card-text"><strong>Currency :</strong>  {props.currency} ({props.symbol})</p>
                <p className="card-text"> <strong> Population :</strong> {props.population}</p>
            </div>
        </div>
    )
}

export default Card;