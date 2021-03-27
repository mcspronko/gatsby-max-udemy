import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

const ProductTemplate = ({ data: { contentfulProduct }, location }) => {
  const image = getImage(contentfulProduct.image)
  const src = getSrc(contentfulProduct.image)
  return (
    <Layout>
      <div style={{
        marginLeft: '0 auto',
        width: '100%',
        textAlign: 'center'
      }}>
        <h2>{contentfulProduct.title} - <span style={{ color: '#ccc' }}>
          Added on {contentfulProduct.createdAt}</span></h2>
          <h4>${contentfulProduct.price}</h4>
          <p>{contentfulProduct.shortDescription}</p>
          <button 
            style={{
              background: 'darkorange',
              color: 'white',
              padding: '0.3rem',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          className="snipcart-add-item" 
            data-item-id={contentfulProduct.slug}
            data-item-price={contentfulProduct.price}
            data-item-image={src}
            data-item-name={contentfulProduct.title}
            data-item-url={location.pathname}
          >Add to Cart</button>
          <GatsbyImage style={{
            margin: '0 auto',
            maxWidth: 600
          }} image={image} alt={contentfulProduct.title}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
	contentfulProduct(slug: {eq: $slug}) {
    id
    slug
		title
    shortDescription
    price
    createdAt(formatString: "MMMM Do, YYYY, h:mm:ss a")
    image {
			gatsbyImageData(
				width: 800
        placeholder: BLURRED
        formats: [AUTO, WEBP]
      )
    }
  }
}
`
export default ProductTemplate
