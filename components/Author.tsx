import Image from 'next/image'
import React from 'react'

interface Props {
    author : any
}

function Author({author}: Props) {
  return (
    <div className='text-center mt-12 mb-8 p-16 shadow-lg relative rounded-lg bg-black opacity-10 '>
        <div className='absolute left-0 right-0 -top-14'>
            <Image 
                alt={author.author}
                src={author.url}
            />

        </div>

    </div>
  )
}

export default Author