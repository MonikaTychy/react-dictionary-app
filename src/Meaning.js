import React from 'react';
import './Meaning.css';

export default function Meaning(props) {
    return (
        <div className='Meaning'>
        <h2>{props.meaning.partOfSpeech}</h2>
        <div>{props.meaning.definitions.map(function (definition, index) {
            return (
                <div key={index}>
                 <p className='definition'><span>definiton:</span> {definition.definition}</p>
                 <p className='example'>{definition.example !== undefined ? `example: ${definition.example}` : null}</p>
                 <div>{definition.synonyms.map((synonym, index) => {
                   return (
                     <p key={index} className='synonym'><span>similar: </span>{synonym}</p>
                    );
                    })}
                 </div>
                </div>
            );
        })}
        </div>
        
        </div>
    );
}