import React from 'react'

const Author = ({ author }) => {
  return (
    <>
    {author && Object.keys(author).length !== 0 ? (
      <div className='bg-tertiary rounded-2xl w-full relative text-center mt-12 p-12'>
        <div className="absolute left-0 right-0 -top-12 mx-auto flex justify-center">
          <img
            alt={author.name}
            height="80px"
            width="80px"
            className="align-middle rounded-full"
            src={author.picture.url}
          />
        </div>
        <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
        <p className="text-white text-[14px]">{author.biography}</p>
      </div>
    ) : null}
    </>
  )
}

export default Author