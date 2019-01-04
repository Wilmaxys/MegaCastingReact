import React from 'react';

import './Offer.css';

const offer = (props) => (
    <article className="Offer" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default offer;