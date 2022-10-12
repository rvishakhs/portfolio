import moment from 'moment';
import Link from 'next/link';
import React from 'react'
import { BsFillCalendarPlusFill } from "react-icons/bs";

interface Props {
    posts : any
}

const Postcard = ({posts}: Props) => {

    console.log(posts);

  return (
    <div className='bg-white/80 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
        <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
          <img
            src={posts.node.image.url}
            alt={posts.tittle}
            className="object-top absolute h-80 w-full object-cover rounded-t-md text-white   "
          />
        </div>
        <h1 className='transition duration-700 ease-out text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
            <Link href={`/posts/${posts.node.slug}`}>
              {posts.node.tittle}
            </Link>   
        </h1>
        <div className='flex text-center items-center justify-between mb-4 lg:mb-8 px-6 md:px-16 '>
            <div className='flex items-center space-x-4 md:justify-center '>
              <img 
                alt={posts.node.author.author}
                height="30px"
                width="30px"
                className='align-middle rounded-full'
                src={posts.node.author.photo.url}
              />
              <p className='text-gray-700 align-middle font-semibold'>{posts.node.author.author}</p>
            </div>
            <div className='flex items-center space-x-3 font-medium font-serif text-center align-middle text-gray-700'>
              <BsFillCalendarPlusFill className=''/>
              <span>{moment(posts.node.createdAt).format('MMM DD, YYYY')}</span>
            </div>
        </div>
            <p className='text-justify px-4 md:px-8'>{posts.node.excerpt}</p>
        <div className='text-center mt-4'>
          <Link href={`/posts/${posts.node.slug}`}>
            <span className='border border-gray-400 px-3 py-3 rounded-2xl transition transform duration-500 hover:-translate-y-1 inline-block bg-pink-600 cursor-pointer'>
              Countinue Reading 
            </span>
          </Link>

        </div>
    </div>
  )
}

export default Postcard