import React from 'react';
import NavPill from './navPill';

const Navbar = () => {
    return (
        <ul className="flex space-x-24 items-center">
            <li className="mr-3 flex-1"><NavPill/></li>
            <li className="mr-3 flex-1"><NavPill/></li>
            <li className="mr-3 flex-1"><NavPill/></li>
            <li className="mr-3 flex-1"><NavPill/></li>
        </ul>
    );
}

export default Navbar;