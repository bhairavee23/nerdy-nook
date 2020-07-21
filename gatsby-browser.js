// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import "prismjs/themes/prism.css"
import "./src/css/index.scss"
import React  from 'react';
import fetch from 'isomorphic-fetch';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

//Wraps the entire Gatsby app with Apollo
export const wrapRootElement = ({ element }) => {
    //Register a new Apollo client
    const client = new ApolloClient({
        fetch,
        uri: 'https://nerdynook.com/graphql',
    });

    //Wrap the element
    return <ApolloProvider client={client}>{element}</ApolloProvider>;
}