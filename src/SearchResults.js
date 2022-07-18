import React from 'react';
import './SearchResults.css';
import Meaning from './Meaning';

export default function SearchResults(props) {

    if (props.result) {
        return (
            <div className='SearchResults'>
                <h2>{props.result.word}</h2>
                <p>
                    {props.result.meanings.map(function(meaning,index){
    return <div key={index}>
        <Meaning meaning={meaning} />
    </div>
                })}
                </p>
            </div>
        );
    } else {
        return null;
    }
}