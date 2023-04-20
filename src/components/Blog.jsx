import React, { useEffect, useState } from 'react'; 
import { motion } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query';
import moment from 'moment';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { getPosts } from '../blogApi';
import { Link } from 'react-router-dom';
import { Categories, PostWidget } from '.'

const BlogCard = ({ node }) => {
  return (
    <Link to={`/blogs/${node.slug}`}>
      <div
        className='bg-tertiary p-5 rounded-2xl w-full'
      >
        <div className='relative w-full h-[380px]'>
          <img src={node.featuredImage.url} alt="featured Image" className='h-full w-full object-cover rounded-2xl' />
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{node.title}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{node.excerpt}</p>
        </div>
        <div className="lg:px-0">
          <div className="flex items-center my-6 w-full">
              <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8">
                  <p className="inline align-middle text-secondary font-medium text-[12px]">{node.author.name}</p>
              </div>
              <div className="font-medium text-secondary text-[12px] ml-auto">
                  <span className="align-middle">{moment(node.createdAt).format('MMM DD, YYYY')}</span>
              </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

const Blog = () => {

  const matches = useMediaQuery('(min-width: 640px)');
  const numCards = matches ? projects.length : 4;
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
        const postData = await getPosts();
        setPosts(postData);
    }
    fetchPosts();
  }, [])

  return (
    <>
      <motion.div
        variants={textVariant()}
        className='mb-4 xs:mt-4'
      >
        <p className={styles.sectionSubText}>My thoughts and insights on technology</p>
        <h2 className={styles.sectionHeadText}>Blogs.</h2>
      </motion.div>
      <div className='container mx-auto mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1'>
            <div className='flex flex-wrap gap-7'>
              {posts.map((post) => {
                return (
                  <BlogCard 
                    key={post.node.slug}
                    node = {post.node}
                  />
                )
              })}
            </div>
          </div>
          <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Blog, "");