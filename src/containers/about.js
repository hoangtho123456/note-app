import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="relative">
            <h2 className="font-bold text-blue-900 text-lg md:text-3xl mb-3">
                About App
            </h2>
            <p className="mb-4">App maked by August 17th,2021</p>
            <Link to="/"
                className="text-base text-blue-600 hover:text-red-600 transition">Go back</Link>
        </div>
    );
}

export default About;
