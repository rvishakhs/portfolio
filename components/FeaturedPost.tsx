import Image from 'next/image'
import React from 'react'
import moment from 'moment';
import Link from 'next/link';

interface Props {
    posts : any
}

function FeaturedPost({posts}: Props) {

    console.log(posts);
    

  return (
    <div className='flex '>
        {posts.map((post: any) => (
            <div className='flex relative py-4 group px-2'>
                
                    <Image 
                        alt={post.node.tittle}
                        src={post.node.image.url}
                        height="250px"
                        width="200px"
                        unoptimized
                        className='align-middle opacity-80 hover:scale-105 hover:opacity-100 rounded-3xl object-fill'
                />
                <h3 className='absolute mt-10  py-8 px-12 group-hover:scale-105 font-medium  align-middle justify-center text-white'>{moment(post.node.createdAt).format('MMM DD, YYYY')}</h3>
                    <Link href={`/post/${post.node.slug}`}>
                        <h2 className='absolute mt-3 ml-4 px-6 group-hover:scale-105 cursor-pointer align-middle justify-center text-white py-24 font-semibold items-center left-0 right-0'>{post.node.tittle}</h2>
                    </Link>
        </div>
        )
        )}
    </div>
  )
}

export default FeaturedPost