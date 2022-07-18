import React from 'react';

export default function Meaning(props) {
    return (
        <div className='Meaning'>
        <h4>{props.meaning.partOfSpeech}</h4>
        <p>{props.meaning.definitions.map(function (definition, index) {
            return (
<div key={index}>
    <p>DEFINITION: {definition.definition}</p>
    <p><em>{definition.example}</em></p>
</div>
            );
        })}
        </p>
        </div>
    );
}