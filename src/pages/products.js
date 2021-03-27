import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/layout'

const Products = ({ data: { allContentfulProduct }}) => (

  <Layout>
    <div>
    <h2>Max Products</h2>
      {allContentfulProduct.edges.map(({ node: product}) => {
        const image = getImage(product.image)
        return (
        <div key={product.id}>  
          <Link to={`/products/${product.slug}`} style={{
            textDecoration: 'none',
            color: '#551a8b'
          }}>
            <h3>{product.title} • {' '}<span style={{
              fontSize: '1.2rem',
              fontWeight:300,
              color: '#f60'
            }}>${product.price}</span></h3>
          </Link>
          <GatsbyImage style={{ maxWidth: 300 }} image={image} alt={product.title}/>
        </div>
        )
      })}
    </div>
  </Layout>
)

export const query = graphql`
{
  allContentfulProduct {
    edges {
      node {
        id
        slug
        title
        price
        image {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
}
`

export default Products