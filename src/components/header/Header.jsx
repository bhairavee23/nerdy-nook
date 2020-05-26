import React from 'react';
import Navbar from '../navigation/Navbar';

export const Header = () => (
    <div className="pt-5 fixed top-0 w-full border-b border-red-700 bg-white">
        <div className="pt-2 text-center text-red-700 text-6xl pb-6 px-4">
            Nerdy Nook
        </div>
        <div className="px-64">
            <Navbar/>
        </div>
    </div>
);