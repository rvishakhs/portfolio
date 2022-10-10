import React from 'react'

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
            className="object-top absolute h-80 w-full object-cover rounded-t-md"
          />
        </div>
    </div>
  )
}

export default Postcard