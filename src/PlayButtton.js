import React, { useState, useRef } from 'react';
import './PlayButtton.css';

export default function PlayButtton(props) {
    const [play, setPlay] = useState(false);
    const audioElem = useRef();

function togglePlay() {
    setPlay(!play);
    audioElem.current.play();
}

if (props.audioLink.length) {
    return (
        <div className='PlayButton'>
            <audio src={props.audioLink[0].audio} ref={audioElem} />
        <button onClick={togglePlay}>
          <i className="fa-solid fa-volume-high fa-xl" id='volumeIcon'></i>
        </button>
        </div>
    );
} else {
    return null;
}
}