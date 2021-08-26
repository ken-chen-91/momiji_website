import React from "react";
import "./HeroSection.css";
import styled from "styled-components";

const HeroSection = () => {
    return (
        <div className="hero-container">
        <video src="./assets/videos/video.mp4" autoPlay loop muted />
        <div className="hero-text">
            <h2>WELCOME TO MOMIJI</h2>
            <h1>JAPANESE RESTAURANT & SUSHI BAR</h1>
            <p>The most authentic Japanese Cuisine in Oregon</p>
            <ButtonContianer>
                <ButtonLeft>MAKE A REDERVSTION</ButtonLeft>
                <ButtonRight>ORDER ONLINE</ButtonRight>
            </ButtonContianer>
        </div>
        </div>
    );
    };

    const ButtonContianer = styled.div`
    padding-top: 30px;
    width: 100%;
    `;

    const ButtonLeft = styled.button`
    width: 13rem;
    font-size: 1.1rem;
    height: 60px;
    /* font-family: 'Oswald', sans-serif; */
    font-weight: 800;
    font-style: normal;
    color: #ffffff;
    background-color: #b71a25;
    border-style: none;
    border-radius: 10px;
    margin-right: 30px;
    position: absolute;
    `;

    const ButtonRight = styled.button`
    width: 13rem;
    font-size: 1.1rem;
    height: 60px;
    font-weight: 400;
    font-style: normal;
    color: #1b1f28;
    background-color: #ffffff;
    border-style: none;
    border-radius: 10px;
    `;

export default HeroSection;
