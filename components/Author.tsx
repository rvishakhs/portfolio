import Image from 'next/image'
import React from 'react'

interface Props {
    author : any
}

function Author({author}: Props) {
    console.log(author);
    
  return (
    <div className='text-center mt-20 mb-2 p-16 shadow-lg space-x-2 relative rounded-lg bg-black/10 '>
        <div className='absolute left-0 right-0 -top-14'>
            <Image 
                alt={author.author}
                src={author.photo.url}
                height="100px"
                width="100px"
                unoptimized
                className='align-middle rounded-full object-fill'
            />
        </div>
        <h2 className='font-bold text-gray-700'>{author.author}</h2>

        <p className='mt-2 font-medium -mb-4'>{author.bio}</p>

    </div>
  )
}

export default Author