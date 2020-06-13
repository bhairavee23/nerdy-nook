import React from 'react';
import { Link } from 'gatsby';

const NavPill = ({data}) => {
    console.log(data);
    return (
        
        data === "/" ? <Link data={data} className="shadow-none text-red-800 hover:border-b-2 hover:border-red-800" >Home</Link> :
        <Link className="shadow-none text-red-800 hover:border-b-2 hover:border-red-800 capitalize" to={data}>{data}</Link>
    );
}

export default NavPill;