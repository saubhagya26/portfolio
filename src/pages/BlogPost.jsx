import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { getPostDetails } from '../blogApi';
import { Categories, PostWidget, Navbar, Author, Comments, CommentsForm } from '../components'

const PostDetail = ({ post }) => {

    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
        }
    
        switch (type) {
          case 'heading-three':
            return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'paragraph':
            return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-four':
            return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
          case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
              />
            );
          default:
            return modifiedText;
        }
    };

    return (
        <>
        {post && Object.keys(post).length !== 0 ? (
          <div className='bg-tertiary p-5 rounded-2xl w-full'>
            <div className='relative w-full h-[380px] mb-3'>
              <img
                src={post.featuredImage.url}
                alt='featured Image'
                className='h-full w-full object-cover rounded-2xl'
              />
            </div>
            <div className="px-4 lg:px-0">
              <div className="flex items-center mb-8 w-full">
                  <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8">
                      <img
                          alt={post.author.name}
                          height="30px"
                          width="30px"
                          className="align-middle rounded-full"
                          src={post.author.picture.url}  
                      />
                      <p className="inline align-middle text-secondary ml-2 font-medium text-[12px]">{post.author.name}</p>
                  </div>
                  <div className="font-medium text-secondary text-[12px] ml-auto">
                      <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                  </div>
              </div>
            </div>
            <div className='mt-5'>
              <h3 className='text-white font-bold text-[24px]'>{post.excerpt}</h3>
              <div className='mt-2 text-white text-[14px]'>
              {
                post.content.raw.children.map((typeObj, index) => {
                  const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
                  return getContentFragment(index, children, typeObj, typeObj.type);
                })
              }
              </div>
            </div>
          </div>
        ) : null}
      </>
    )
}

const BlogPost = () => {

    const { slug } = useParams();

    const [postDetails, setPostDetails] = useState({});

    useEffect(() => {
        const fetchPostDetails = async () => {
            const postDetailsData = await getPostDetails(slug);
            console.log(postDetailsData);
            setPostDetails(postDetailsData);
        }
        fetchPostDetails();
    },[]);

    console.log(postDetails);

  return (
    <div>
        <motion.div
          variants={textVariant()}
          className='mb-4'
        >
          <h2 className={styles.sectionHeadText}>{postDetails.title}</h2>
        </motion.div>
        <div className='container mx-auto mb-8'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
              <div className='lg:col-span-8 col-span-1'>
                  <div className='flex flex-wrap gap-7'>
                      <PostDetail post={postDetails} />
                      <Author author={postDetails.author} />
                      <Comments slug={postDetails.slug} />
                      <CommentsForm slug={postDetails.slug}/>
                  </div>
              </div>
              <div className='lg:col-span-4 col-span-1'>
                <div className='lg:sticky relative top-8'>
                  <PostWidget slug={postDetails.slug} categories={postDetails.categories && postDetails.categories.map((category) => category.slug)}/>
                  <Categories />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SectionWrapper(BlogPost, "");