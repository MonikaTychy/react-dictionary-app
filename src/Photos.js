import React from 'react';
import './Photos.css';

export default function Photos(props) {
   if (props.photos) {
       return (
           <div className='Photos'>
               {props.photos.map(function(photo, index) {
                  return (
                    <div key={index} >
                    <a href={photo.url} target='_blank' rel='noreferrer' title="Photo's website Pexels.com"><img src={photo.src.tiny} alt={props.wordName} /></a>
                    </div>
                  );
               })}
           </div>
       );
   } else {
    return null;
   }
}