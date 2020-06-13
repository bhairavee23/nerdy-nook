import React from 'react';
import Card from '../components/card/Card';
import { useStaticQuery } from 'gatsby';
import { usePost } from '../queries/get-post-highlights';

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

    const posts = usePost();

    
    console.log(posts);
    console.log(data);          
    console.log("hello"); 
    
    return (
    <>
        <div className="py-16 xl:py-12 flex flex-row justify-center flex-wrap">
            {posts.map(({ node }) => (
                <Card data={node.acf} slug={node.slug} />
            ))}
        </div>
    </>
    )
};
