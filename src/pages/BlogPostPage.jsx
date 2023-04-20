import React from 'react'
import { Navbar } from '../components'
import BlogPost from './BlogPost'

const BlogPostPage = () => {
  return (
    <div className="relative z-0 bg-primary">
        <Navbar />
        <BlogPost />
    </div>
  )
}

export default BlogPostPage