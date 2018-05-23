import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div>
    <div
      className='header'
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <div className='title f3 mt3' style={{ fontWeight: 'normal', textTransform: 'uppercase' }}>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </div>
      <ul
        className='navigate f5 mt4'
        style={{
          listStyleType: 'none',
          textTransform: 'uppercase',
          padding: 0
        }}
      >
        <li>
          <Link to='/profile/'>
            Profile
          </Link>
        </li>
        <li>
          <Link to='/CV/'>
            CV
          </Link>
        </li>
        <li>
          <Link
            to="/video/">
            Video
          </Link>
        </li>
        <li>
          <Link
            to="/contact/">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
