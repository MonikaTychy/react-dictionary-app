import React from 'react';
import './SearchResults.css';
import Meaning from './Meaning';
import Phonetics from './Phonetics';
import Photos from './Photos';

export default function SearchResults(props) {
    console.log(props.result);
    if (props.result) {
        return (
            <div className='SearchResults'>
                <div className='SearchedWord'>
                  <h2>{props.result.word}</h2>
                  {props.result.phonetics.map(function(phonetic, index) {
                    return (
                         <Phonetics key={index} phonetic={phonetic} />
                    );
                  })}
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