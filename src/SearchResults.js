import React from 'react';
import './SearchResults.css';
import Meaning from './Meaning';

export default function SearchResults(props) {
console.log(props);
    if (props.result) {
        return (
            <div className='SearchResults'>
                <div className='SearchedWord'>
                    <div>🎵</div>
                 <h2>{props.result.word}</h2>
                 <p>{props.result.phonetic}</p>
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