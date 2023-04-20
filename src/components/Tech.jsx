import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-wrap flex-row justify-center gap-10'>
      {technologies.map((technology) => {
        return (
          <div className='hidden md:block w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        )
      })}
      {
        technologies.map((technology) => {
          return (
            <div className='block md:hidden w-24 h-24 rounded-full bg-[#fff8eb] flex justify-center items-center'>
              <img src={technology.icon} alt="" className="object-contain h-4/5 w-4/5" />
            </div>
          )
        })
      }
    </div>
  )
}

export default SectionWrapper(Tech, "");
