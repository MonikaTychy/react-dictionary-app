import React, { useState } from 'react';
import './Dictionary.css';
import axios from 'axios';

export default function Dictionary () {
    let [keyword, setKeyword] = useState ("");

    function showResponse(response) {
        console.log(response.data);
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        // documentation https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(showResponse);
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