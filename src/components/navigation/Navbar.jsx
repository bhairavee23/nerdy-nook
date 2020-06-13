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
                    }
                  }
                }
            }
        `
    )
    console.log(data);
    return (
        <ul className="flex space-x-24 items-center">
            <li className="mr-3 flex-1"><NavPill data="/"/></li>
            {data.allWordpressPage.edges.map(({ node }) => (
                <li className="mr-3 flex-1"><NavPill data ={node.slug}/></li>
            ))}
        </ul>
    );
}

export default Navbar;