import React, { Component } from "react"
import { graphql } from "gatsby"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import SEO from "../components/seo"
import Layout from "../components/layout/Layout"
import parse from 'html-react-parser';
import CommentsForm from "../components/comments/CommentsForm"

class Page extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage
      
    return (
      <div classname="flex flex-col min-h-full">
        <Header/>
        <SEO title={StaticPage.title} />
        <Layout>
        <div className="py-20 xl:py-16 flex flex-col content-center ">
        <div className="py-4 pb-8 text-center"><h1 className="text-4xl text-red-700">{StaticPage.title}</h1></div>
        <div className="space-y-6 post px-16 lg:px-0">{parse(StaticPage.content)}</div>
        <div className="py-16 px-16 lg:px-0 content-center mx-20">
          <CommentsForm postId={StaticPage.wordpress_id}/>
        </div>
      </div>
      </Layout>
        <Footer/>
      </div>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      wordpress_id
      title
      content
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`