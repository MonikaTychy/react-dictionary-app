import React from 'react';
import './App.css';
import Header from './Header';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <Header />
     <main>
      <Dictionary />
     </main>
     <footer>
      <small>Coded by Monika Tychy, 
        <a href='https://github.com/MonikaTychy/react-dictionary-app' target="_blank" rel="noreferrer"> open-sourced on GitHub</a> and 
        <a href='https://fantastic-macaron-9eb9ce.netlify.app/' target="_blank" rel="noreferrer"> hosted on Netlify.</a></small>
     </footer>
     </div>
    </div>
  );
}


