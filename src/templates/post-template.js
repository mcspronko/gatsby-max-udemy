import React from 'react'
import Layout from '../components/layout'

import { graphql } from 'gatsby'
const PostTemplate = ({ data: post }) => (
    <Layout>
        <h2>{ post.markdownRemark.frontmatter.title }</h2>
        <h4>{ post.markdownRemark.timeToRead } {post.markdownRemark.timeToRead > 1 ? 'minutes' : 'minute'}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
    </Layout>
)

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug} }) 
  {
		html
    timeToRead
    frontmatter {
			title
    }
  }
} 
`

export default PostTemplate

