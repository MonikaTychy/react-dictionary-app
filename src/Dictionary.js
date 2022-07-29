import React, { useState } from 'react';
import './Dictionary.css';
import axios from 'axios';
import SearchResults from './SearchResults';

export default function Dictionary () {
    const [keyword, setKeyword] = useState ("");
    const [result, setResult] = useState(null);
    const [photos, setPhotos] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function showPexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function showDictionaryResponse(response) {
        setResult(response.data[0]);
        setLoaded(true);
    }

    function search() {
    // documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showDictionaryResponse).catch(err => {setResult(null); console.log(err)});

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

    if(loaded) {
    return (
     <div className='Dictionary'>
       <div className='SearchEngine'>
         <form onSubmit={handleSubmit}>
         <input type='search' onChange={updateKeyword} placeholder='Search for a word' />
         </form>
       </div>
       {result !== null ? (<><SearchResults result={result} photos={photos} /></>) : (<p>Sorry</p>)}
        </div>
    );
    } else {
        return (
            <div className='Dictionary'>
              <h1>DICTIONARY</h1>
               <div className='SearchEngine'>
                <form onSubmit={handleSubmit}>
                <input type='search' onChange={updateKeyword} placeholder='Search for a word' />
                </form>
               </div>
            </div>
           );
    }
}