import React, { useState, useEffect } from 'react'
import { getRecentPosts, getSimilarPosts } from '../blogApi';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostWidget = ({ categories, slug }) => {

  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRecentPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRecentPosts(result))
    }
  },[slug]);

  return (
    <div className='bg-tertiary p-5 rounded-2xl w-full mb-8'>
      <h3 className='text-xl mb-8 font-semibold'>
        { slug ? 'Related Posts' : 'Recent Posts' }
      </h3>
      {
        recentPosts.map((post) => {
          return (
            <div key={post.title} className='flex items-center w-full mb-4'>
              <div className='flex-none w-16'>
                <img src={post.featuredImage.url} alt={post.title} height='70px' width='70px' className='rounded-lg align-middle'/>
              </div>
              <div className='flex-grow ml-4'>
                <p className='text-secondary text-[12px]'>
                  {moment(post.createdAt).format('MMM DD, YYYY')}
                </p>
                <Link to={`/blogs/${post.slug}`} className="text-md" key={post.title}>{post.title}</Link>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default PostWidget