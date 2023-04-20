import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../blogApi'


const Categories = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  },[])

  return (
    <div className='bg-tertiary p-5 rounded-2xl w-full'>
      <h3 className='text-xl mb-8 font-semibold'>
        Categories
      </h3>
      {
        categories.map((category) => {
          return (
            <Link key={category.slug} to={`/category/${category.slug}`}>
              <span className='block pb-3 mb-3 text-secondary'>
                {category.name}
              </span>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Categories