import React from 'react'; 
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query';

import { styles } from '../styles';
import { github, link } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, project_link }) => {

  const matches = useMediaQuery('(min-width: 640px)');

  return (
    <div>
      { matches ? (
        <motion.div
        variants={fadeIn('up','spring',index * 0.5, 0.75)}
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full '
        >
          <div className='relative w-full h-[230px]'>
            <img src={image} alt={name} className='h-full w-full object-cover rounded-2xl' />
          </div>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-1'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='w-10 h-10 black-gradient rounded-full flex justify-center items-center cursor-pointer hide'
            >
              <img src={github} alt='source-code' className='w-1/2 h-1/2 object-contain' />
            </div>
            <div
              onClick={() => window.open(project_link, "_blank")}
              className='w-10 h-10 bg-gradient-to-r from-orange-600 to-red-500 rounded-full flex justify-center items-center cursor-pointer hide'
            >
              <img src={link} alt='project-link' className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>
        </Tilt>
      </motion.div>
      ) : (
        <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full '>
          <div className='relative w-full h-[230px]'>
            <img src={image} alt={name} className='h-full w-full object-cover rounded-2xl' />
          </div>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-1'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='w-10 h-10 black-gradient rounded-full flex justify-center items-center cursor-pointer hide'
            >
              <img src={github} alt='source-code' className='w-1/2 h-1/2 object-contain' />
            </div>
            <div
              onClick={() => window.open(project_link, "_blank")}
              className='w-10 h-10 bg-gradient-to-r from-orange-600 to-red-500 rounded-full flex justify-center items-center cursor-pointer hide'
            >
              <img src={link} alt='project-link' className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>
        </div>
      ) }
    </div>
  )
}

const Works = () => {

  const matches = useMediaQuery('(min-width: 640px)');

  return (
    <div>
      {
        matches ? (
          <>
            <motion.div
              variants={textVariant()}
            >
              <p className={styles.sectionSubText}>My Work</p>
              <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>
            <div className='w-full flex'>
              <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
              >
                Following projects showcases my skills and experience through
                real-world examples of my work. Each project is briefly described with
                links to code repositories and live demos in it. It reflects my
                ability to solve complex problems, work with different technologies,
                and manage projects effectively.
              </motion.p>
            </div>
          </>
        ) : (
          <>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
          <div className='w-full flex'>
            <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described with
              links to code repositories and live demos in it. It reflects my
              ability to solve complex problems, work with different technologies,
              and manage projects effectively.
            </p>
          </div>
          </>
        )
      }
      
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project,index) => {
          return (
            <ProjectCard 
              key={`project-${index}`}
              index={index}
              {...project}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SectionWrapper(Works, "work");