import React from 'react';
import './Phonetics.css';

export default function Phonetics(props) {
   const audioLink = props.phonetic.audio

    function togglePlay() {
       let audio = new Audio(audioLink);
       audio.play();
    }

    if (props.phonetic.audio) {
        return (
          <div className='Phonetics'>
              <button onClick={togglePlay}>
                <i className="fa-solid fa-volume-high fa-xl" id='volumeIcon'></i>
              </button>
            <p>{props.phonetic.text}</p>
          </div>
        );
    }
    return null;
}