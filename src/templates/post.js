import React, { Component } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import parse from 'html-react-parser';

class Post extends Component {
    render() {
    const post = this.props.data.wordpressPost

    return (
      <>
        <h1>{post.title}</h1>
        <div>{parse(post.content)}</div>
      </>
    )
  }
}

function createMarkup(data) {
  return {__html: data};
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`