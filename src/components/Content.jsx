import React from 'react';
import Card from '../components/card/Card';
import {useStaticQuery, graphql} from 'gatsby';

export const Content = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allWordpressPost(sort: {fields: [date] }) {
                    edges {
                        node {
                            title 
                            excerpt
                        }
                    }
                }
            }
        `
    )
    console.log(data);
    return (
    <>
        <div className="py-16 xl:py-12 flex flex-row justify-center flex-wrap">
            {data.allWordpressPost.edges.map(({ node }) => (
                <Card data={node}/>
            ))}
        </div>
    </>
    )
};
