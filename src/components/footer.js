import React from 'react';
import { Link } from 'react-router-dom';

const AppFooter = ({}) => {
    return (
        <div className="pt-2">
            <p className="mb-1 text-center text-gray-600 text-lg">Copy right &copy; 2021</p>
            <div className="text-center">
                <Link to="/about" 
                className="text-base text-blue-600 hover:text-red-600 transition">About</Link>
            </div>
        </div>
    );
}

export default AppFooter;
