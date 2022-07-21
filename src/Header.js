import React from 'react';
import './Header.css';
import webHeader from './webHeader.jpeg';

export default function Header() {
    return (
<div className='Header'>
    <img src={webHeader} alt='Monkey in library - illustrated by J.Kirby for T.Pratchett book' />
</div>
    );
}