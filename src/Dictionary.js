import React, { useState } from 'react';
import './Dictionary.css';

export default function Dictionary () {
    let [keyword, setKeyword] = useState ("");

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Searching definition for "${keyword}"`);
    }
    
    function updateKeyword(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className='Dictionary'>
<form onSubmit={handleSubmit}>
    <input type="search" onChange={updateKeyword}/>
</form>
        </div>
    );
}