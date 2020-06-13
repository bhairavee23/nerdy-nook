import { useStaticQuery, graphql } from 'gatsby';

export const usePost = () => {
    const { allWordpressPost } = useStaticQuery(
        graphql`
            query PostWP {
                allWordpressPost {
                    edges {
                      node {
                        slug
                        content
                        title
                        author {
                          name
                        }
                        date
                        excerpt
                        acf {
                          post_header
                          post_excerpt
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
    console.log(allWordpressPost)
    return allWordpressPost.edges
}