import React, { useState } from 'react';
import './Dictionary.css';
import axios from 'axios';
import SearchResults from './SearchResults';

export default function Dictionary () {
    let [keyword, setKeyword] = useState ("");
    let [result, setResult] = useState(null);
    let [photos, setPhotos] = useState(null);

    function showPexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function showDictionaryResponse(response) {
        setResult(response.data[0]);
    }

    function search() {
    // documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showDictionaryResponse);

    // documentation https://www.pexels.com/pl-pl/api/documentation/?
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    const pexelsApiKey = `563492ad6f91700001000001251b16299160435cb952db908107901d`; 
    const headers = { Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers }).then(showPexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function updateKeyword(event) {
        setKeyword(event.target.value);
    }

    return (
     <div className='Dictionary'>
       <div className='SearchEngine'>
         <form onSubmit={handleSubmit}>
         <input type="search" onChange={updateKeyword}/>
         </form>
       </div>
      <SearchResults result={result} photos={photos} />
        </div>
    );
}