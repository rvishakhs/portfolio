import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import {getRecentPosts} from '../services/index'
import {getSimilarPosts} from '../services/index'
import moment from 'moment';
import Link from 'next/link';


interface Props {
  categories: string
  slug: any
}

function Postwidget({categories, slug}: Props) {

  const [similarPosts, setSimilarPosts] = useState([])

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug).then ((results) => {
          setSimilarPosts(results)
      });
    } else {
      getRecentPosts().then((results) => {
        setSimilarPosts(results)
      });
    }
  }, [slug])


  console.log(similarPosts);
  

  return (
    <div className='bg-white rounded-lg p-8 pb-12 mb-3 ml-2'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>{slug? 'Related posts' : "Recent Posts "}</h3>
        {similarPosts.map((post:any , index:number) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src={post.image.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.tittle}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Postwidget