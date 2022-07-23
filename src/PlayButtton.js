import React, { useState, useRef } from 'react';
import './PlayButtton.css';

export default function PlayButtton(props) {
    const [play, setPlay] = useState(false);
    const audioElem = useRef();

function togglePlay() {
    setPlay(!play);
    audioElem.current.play();
}

    return (
        <div className='PlayButton'>
            <audio src={props.audioLink} ref={audioElem} />
        <button onClick={togglePlay}>
          <i className="fa-solid fa-volume-high fa-xl" id='volumeIcon'></i>
        </button>
        </div>
    );
}