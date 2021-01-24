import React from 'react';
import '../styles/Home.css';
import bloodDonate from '../assets/blood-donate.png';
import GoogleSuggest from '../components/GoogleSuggest';

function Home() {
    return (
        <div className="home-flexbox-wrapper">
            <h1 className="home-title"><span className="home-span">B</span>Fine</h1>
            <div className="search-form">
            <GoogleSuggest />
            </div>
            <div className="home-flexbox-container-1">
                <div className="home-logo-container">
                    <img className="blood-logo" src={ bloodDonate } alt="logo"></img>
                </div>
                <div className="home-text-container">
                        <h1 className="home-h1"><span className="home-span-title">200 million</span> people in need</h1>
                        <p className="home-p">Connecting donors to hospitals and patients who need it most.<br></br>
                        With stay home protocols, <span className="home-span">COVID-19</span> has significantly <span className="home-span">decreased</span><br></br>
                        <span className="home-span">blood donations</span> leading to <span className="home-span">multiple shortages</span> and <span className="home-span">patients in need</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;