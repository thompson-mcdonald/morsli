import React from 'react'
import Link from 'gatsby-link'

const Container = ({ children, classNames }) => (
  <div>
    <div className={'container ' + classNames}>
      {children}
    </div>
  </div>
)

export default Container
