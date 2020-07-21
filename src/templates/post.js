import React, { Component } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import parse from 'html-react-parser';
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"

import { Header } from "../components/header/Header"
import { Content } from "../components/Content"
import { Footer } from "../components/footer/Footer"
import './scss/post.scss';
import CommentsForm from "../components/comments/CommentsForm";

class Post extends Component {
    render() {
    const post = this.props.data.wordpressPost;
    console.log(post);

    return (
      <div classname="flex flex-col min-h-full">
        <Header/>
        <SEO title={post.title} />
        <Layout>
        <div className="py-20 xl:py-16 flex flex-col content-center ">
            <div className="py-4 pb-8 text-center"><h1 className="text-4xl text-red-700">{post.title}</h1></div>
            <div className="space-y-6 post px-16 lg:px-0 text-center">
              {parse(post.content)}
            </div>
            <div className="py-16 px-16 lg:px-0 content-center mx-20">
              <CommentsForm postId={post.wordpress_id}/>
            </div>
          </div>
        </Layout>
        <Footer/>
      </div>
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
      wordpress_id
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