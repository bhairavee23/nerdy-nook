import React from 'react';
import NavPill from './NavPill';
import { useStaticQuery } from 'gatsby';

const Navbar = () => {
    const data = useStaticQuery (
        graphql`
            query {
                allWordpressPage {
                  edges {
                    node {
                      slug
                      menu_order
                    }
                  }
                }
            }
        `
    )

    const navData = data.allWordpressPage.edges.map(el => el.node)
    navData.sort((a,b) => ((a.menu_order > b.menu_order) ? 1 : ((b.menu_order > a.menu_order) ? -1 : 0)));
    console.log(navData);

    return (
        <ul className="flex space-x-24 items-center">
            <li className="mr-3 flex-1"><NavPill data="/"/></li>
            {navData.map((node) => (
                <li className="mr-3 flex-1"><NavPill data ={node.slug}/></li>
            ))}
        </ul>
    );
}

export default Navbar;