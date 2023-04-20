import React from 'react'
import { Navbar, Blog, Categories, PostWidget } from '../components'

const Blogs = () => {
  return (
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Blog />
      </div>
  )
}

export default Blogs