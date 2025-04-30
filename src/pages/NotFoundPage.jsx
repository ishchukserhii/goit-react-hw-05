import React from 'react'
import { getCastById } from '../search'
import { Link } from 'react-router'

const NotFoundPage = () => {

  return (
    <div>
      <p>NotFoundPage</p>
      <Link to={'/'} >Home</Link>
    </div>
  )
}

export default NotFoundPage