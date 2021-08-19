import React from 'react';
import './HeroSection.css';
import Button from  '../Button/Button.js'
function HeroSection() {
    return (
    <div className='hero-container'>
        <video src='./assets/videos/video.mp4' autoPlay loop muted />
            {/* <h1 className="hero-title"><span>Pick Up </span><span>& </span><span>Delivery</span></h1> */}
            <h1 className="sc-giIncl gHUUHu">Greatest SuShi Ever</h1>
            <p>READY IN 60 SECONDS</p>
        <div className='hero-btns'>
            {/* <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
            GET STARTED
            </Button> */}
            {/* <Button
            label="Order Now !!!"
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
            >
            </Button> */}
        </div>
        </div>
    );
}

export default HeroSection;