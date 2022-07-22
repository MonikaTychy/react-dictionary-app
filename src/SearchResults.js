import React from 'react';
import './SearchResults.css';
import Meaning from './Meaning';

export default function SearchResults(props) {

    if (props.result) {
        return (
            <div className='SearchResults'>
                <div className='SearchedWord'>
                 <h2>{props.result.word}</h2>
                </div>
                <div className='WordPhotos'>
                    ZDJĘCIA
                </div>
                <div className='WordMeanings'>
                    {props.result.meanings.map(function(meaning,index){
    return <div key={index}>
        <Meaning meaning={meaning} />
    </div>
                })}
                </div>
            </div>
        );
    } else {
        return null;
    }
}