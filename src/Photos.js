import React from 'react';
import './Photos.css';

export default function Photos(props) {
   if (props.photos) {
       return (
           <div className='Photos'>
               {props.photos.map(function(photo, index) {
                  return (
                    <div key={index} >
                     <img src={photo.src.small} alt={props.wordName} />
                    </div>
                  );
               })}
           </div>
       );
   } else {
    return null;
   }
}