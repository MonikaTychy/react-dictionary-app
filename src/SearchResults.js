import React from 'react';
import './SearchResults.css';
import Meaning from './Meaning';
import PlayButtton from './PlayButtton';
import Photos from './Photos';

export default function SearchResults(props) {
    if (props.result) {
        return (
            <div className='SearchResults'>
                <div className='SearchedWord'>
                    <PlayButtton audioLink={props.result.phonetics} />
                 <h2>{props.result.word}</h2>
                 <p>{props.result.phonetic}</p>
                </div>
                <div className='WordPhotos'>
                    <Photos photos={props.photos} wordName={props.result.word} />
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