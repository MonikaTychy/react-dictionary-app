import React from 'react';
import './Meaning.css';

export default function Meaning(props) {
    return (
        <div className='Meaning'>
        <h4>{props.meaning.partOfSpeech}</h4>
        <div>{props.meaning.definitions.map(function (definition, index) {
            return (
                <div key={index}>
                 <p className='definition'><span>definiton:</span> {definition.definition}</p>
                 <p className='example'>{definition.example !== undefined ? `example: ${definition.example}` : null}</p>
                </div>
            );
        })}
        </div>
        <div className='synonym'>{props.meaning.synonyms.map((synonym, index) => {
           return (
                <p key={index}>similar word:
                <ul>
                <li>{synonym}</li>
                </ul>
                </p>
            );
        })}

        </div>
        </div>
    );
}