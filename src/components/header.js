import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? 'active' : 'navlink' }
}

const NavLink = props => <Link getProps={isActive} {...props} />

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center' }}>
      <h1 style={{ margin: 0 }}>
        <NavLink
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </NavLink>
      </h1>
      </span>

      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/products">Store</NavLink>
      
      { /* Shopping Cart Summary */ }
      <div style={{ color: 'white', cursor: 'pointer' }} className="snipcart-summary snipcart-checkout">
        <div><strong>My Cart</strong></div>
        <div><span style={{ fontWeight: 'bold' }} className="snipcart-total-items"></span>{" "}Items in Cart</div>
        <div>Total price{' '}<span style={{ fontWeight: 'bold' }} className="snipcart-total-price"></span></div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
