import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProductTemplate = ({ data: { contentfulProduct } }) => {
  const image = getImage(contentfulProduct.image)
  return (
    <Layout>
      <div>
        <h2>{contentfulProduct.title} - <span style={{ color: '#ccc' }}>
          Added on {contentfulProduct.createdAt}</span></h2>
          <p>{contentfulProduct.description}</p>
          <GatsbyImage image={image} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
	contentfulProduct(slug: {eq: $slug}) {
		title
    shortDescription
    price
    createdAt(formatString: "MMMM Do, YYYY, h:mm:ss a")
    image {
			gatsbyImageData(
				width: 200
        placeholder: BLURRED
        formats: [AUTO, WEBP]
      )
    }
  }
}
`
export default ProductTemplate
