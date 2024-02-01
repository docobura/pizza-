import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import bannerImage from '../assets/pizza.jpeg'; // Import the image file

function Home() {
    return (
        <div className='title'>
            <div className='header container'>
                <h1>THIS IS MY PAGE</h1>
                <p>Fill your tastebuds</p>
                <Link to="/menu">
                    <button>ORDER NOW</button>
                </Link>
                <img src={bannerImage} alt="Pizza" />
            </div>
        </div>
    );
}

export default Home;
