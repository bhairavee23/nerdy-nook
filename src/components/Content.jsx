import React from 'react';
import Card from '../components/card/Card';
import {useStaticQuery, graphql} from 'gatsby';

export const Content = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allWordpressAcfPosts {
                  edges {
                    node {
                      acf {
                        post_excerpt
                        post_header
                        post_header_image {
                          source_url
                        }
                      }
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
            {data.allWordpressAcfPosts.edges.map(({ node }) => (
                <Card data={node.acf}/>
            ))}
            
        </div>
    </>
    )
};
