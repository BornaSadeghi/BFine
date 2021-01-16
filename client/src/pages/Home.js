import React from 'react';
import '../styles/Home.css';
import bloodDonate from '../assets/blood-donate.png';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <div className="home-flexbox-container-1">
                <img className="blood-logo" src={ bloodDonate } alt="logo"></img>
            </div>
        </div>
    )
}

export default Home;